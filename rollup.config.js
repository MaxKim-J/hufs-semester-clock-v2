// import serve from "rollup-plugin-serve";
// import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy'
import html from '@rollup/plugin-html';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import { uglify } from "rollup-plugin-uglify";

fs.rmdirSync('dist', { recursive: true });

// 코드 스플리팅이 잘 동작하는지 살펴봐야할 듯 어쨋든 진입점은 하나
const createHtml = () => {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta http-equiv="X-UA-Compatible" content="ie=edge" /><title>외대종강시계</title></head><body><div id="app"></div><script type='module' src="bundle.js"></script></body></html>`
}

export default {
  input: {
    'background': 'src/background.js',
    'bundle': 'src/index.ts'
  },
  output: {
    dir: "dist",
    format: "es",
    entryFileNames: '[name].js',
    sourcemap: false, // 이부분도 dev와 prod에 따라 다르게
  },
  compact:true,
  preserveEntrySignatures: false,
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development') // 파람에 따라서 수정하기
    }),
    typescript({
      tsconfig: 'tsconfig.json'
    }),
    copy({
      targets: [
        { src: 'src/assets/manifest.json', dest: 'dist' },
        { src: 'src/assets/icons', dest: 'dist' },
      ]
    }),
    html({
      title: '외대 종강시계',
      fileName: 'index.html',
      template: () => createHtml()
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    uglify()
    // livereload({ watch: "dist", verbose:true }),
  ]
};