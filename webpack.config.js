/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const constants = require('./constants.cjs');

const webpackConfig = ({ target, env }) => {
  const PRODUCTION = env === 'production';
  const constantKey = env === 'production' ? 'prod' : 'dev';

  const assets =
    target === 'web'
      ? [
          {
            from: path.resolve(__dirname, 'src/assets/icons/icon_48.png'),
            to: 'favicon.png',
          },
        ]
      : [
          {
            from: path.resolve(__dirname, 'src/assets/icons'),
            to: 'icons',
            toType: 'dir',
          },
          {
            from: path.resolve(__dirname, 'src/assets/manifest.json'),
            to: 'manifest.json',
          },
        ];

  const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:
        target === 'web' && PRODUCTION
          ? './src/assets/index.web.production.html'
          : './src/assets/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
      },
      hash: false,
    }),
    new webpack.DefinePlugin({
      ...constants[constantKey],
      'process.env.IS_WEB': JSON.stringify(target === 'web'),
    }),
    new CopyWebpackPlugin({
      patterns: assets,
    }),
  ];

  if (!PRODUCTION) {
    plugins.push(
      new ESLintPlugin({
        extensions: ['ts', 'tsx'],
      })
    );
  }

  if (!(target === 'web' && !PRODUCTION)) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static',
        reportFilename: '../analysis/bundle-analysis.html',
        generateStatsFile: true,
        statsFilename: '../analysis/bundle-stats.json',
      })
    );
  }

  const config = {
    mode: env,
    entry: {
      bundle: path.resolve(__dirname, 'src/index.tsx'),
    },
    output: {
      path: path.resolve(__dirname, target === 'web' ? 'dist_web' : 'dist'),
      filename: PRODUCTION
        ? 'bundle/bundle.[contenthash:8].js'
        : 'bundle/[name].js',
      chunkFilename: PRODUCTION
        ? 'bundle/chunk.[contenthash:8].js'
        : 'bundle/chunk.[name].js',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            keep_classnames: !PRODUCTION,
            keep_fnames: !PRODUCTION,
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
        }),
      ],
      splitChunks: {
        cacheGroups: {
          default: false,
          defaultVendors: false,
          frameWorks: {
            chunks: 'all',
            filename: PRODUCTION
              ? 'bundle/frameworks.[name].[contenthash:8].js'
              : 'bundle/frameworks.js',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            priority: 3,
            enforce: true,
          },
          asyncChunk: {
            chunks: 'async',
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
            enforce: true,
            minChunks: 2,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/i,
          loader: 'babel-loader',
          exclude: '/node_modules/',
        },
        {
          test: /\.(svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              limit: 20000,
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@shared': path.resolve(__dirname, 'src/_shared'),
        '@components': path.resolve(__dirname, 'src/_shared/components'),
        '@style': path.resolve(__dirname, 'src/_shared/styles'),
      },
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
  };

  if (!PRODUCTION) {
    config.devtool = 'inline-cheap-source-map';
  }

  if (target === 'web') {
    config.devServer = {
      static: {
        directory: path.resolve(__dirname, 'dist_web'),
        publicPath: '/',
      },
      client: {
        overlay: {
          warnings: false,
          errors: true,
        },
      },
      hot: true,
      open: true,
      compress: true,
      port: 3000,
    };
  }

  return config;
};

module.exports = webpackConfig;
