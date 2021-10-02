import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy'
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from "rollup-plugin-terser";
import constants from './constants'
import fs from 'fs';

fs.rmdirSync('dist', { recursive: true });

export default (args) => {
  const PRODUCTION = process.env.NODE_ENV === 'production'
  const constantKey = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
  
  const reactBundleConfig = {
    input: {
      'bundle': 'src/index.ts'
    },
    output: {
      dir: "dist/js",
      format: "es",
      entryFileNames: '[name].js',
      sourcemap: false,
      manualChunks: {
        framework: ['react', 'react-dom']
      },
    },
    preserveEntrySignatures: false,
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json'
      }),
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled',
        presets: ["@babel/preset-react"],
      }),
      nodeResolve({
        extensions: [".js", ".mjs", ".jsx"],
      }),
      replace({
        values: {
        'process.env.NODE_ENV':PRODUCTION ? "'production'" : "'development'",
        ...constants[constantKey]
      },
      preventAssignment : true}),
      url(),
      svgr(),
      commonjs(),
      terser(),
    ]
  }
  
  const chromeExtensionBundleConfig = {
    input: {
      'background': 'src/assets/background.js',
    },
    output: {
      dir: "dist",
      format: "es",
      entryFileNames: '[name].js',
      sourcemap: false,
    },
    preserveEntrySignatures: false,
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled',
      }),
      nodeResolve({
        extensions: [".js"],
      }),
      replace({
        values: {
          'process.env.NODE_ENV':PRODUCTION ? "'production'" : "'development'",
          ...constants[constantKey]
        },
        preventAssignment : true
      }),
      copy({
        targets: [
          { src: 'src/assets/manifest.json', dest: 'dist' },
          { src: 'src/assets/icons', dest: 'dist' },
          { src: 'src/assets/index.html', dest: 'dist' },
        ]
      }),
      commonjs(),
      terser(),
    ]
  }
  
  if (!PRODUCTION) {
    reactBundleConfig.output.sourcemap = 'inline'
    reactBundleConfig.plugins = reactBundleConfig.plugins.concat([
      livereload({ watch: "dist", verbose:true }),
      visualizer()])
  }
  
  return [
    reactBundleConfig, 
    chromeExtensionBundleConfig
  ]
}