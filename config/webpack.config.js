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

const PRODUCTION = process.env.NODE_ENV === 'production';
const constantKey = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const config = {
  mode: process.env.NODE_ENV,
  entry: {
    background: path.resolve(__dirname, '../', 'src/assets/background.js'),
    bundle: path.resolve(__dirname, '../', 'src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: (pathData) =>
      pathData.chunk.name === 'background'
        ? '[name].js'
        : 'bundle/bundle-[contenthash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        defaultVendors: false,
        frameWorks: {
          chunks: 'all',
          filename: 'bundle/frameworks-[contenthash].js',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          priority: 3,
          enforce: true,
        },
        initialChunk: {
          chunks: 'initial',
          filename: 'bundle/initial-chunk-[contenthash].js',
          test: /[\\/]node_modules[\\/]/,
          priority: 2,
          enforce: true,
        },
        asyncChunk: {
          chunks: 'async',
          filename: 'bundle/async-chunk-[contenthash].js',
          priority: 1,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(tsx?)|(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/i,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../', 'src/assets/icons'),
          to: 'assets/icons',
          toType: 'dir',
        },
        {
          from: path.resolve(__dirname, '../', 'src/assets/manifest.json'),
          to: 'manifest.json',
        },
      ],
    }),
    new webpack.DefinePlugin({
      ...constants[constantKey],
    }),
    new HtmlWebpackPlugin({
      excludeChunks: ['background'],
      template: './src/assets/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
      },
      hash: true,
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};

if (!PRODUCTION) {
  config.devtool = 'inline-cheap-source-map';
  config.devServer = {
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  };
  config.plugins = config.plugins.concat([
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: '../analysis/bundle-analysis.html',
      generateStatsFile: true,
      statsFilename: '../analysis/bundle-stats.json',
    }),
  ]);
}

module.exports = config;
