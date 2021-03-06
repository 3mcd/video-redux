require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === 'production';

const devPlugins = [new webpack.HotModuleReplacementPlugin()];

const prodPlugins = [
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: '../reports/bundle.html',
    defaultSizes: 'parsed',
    openAnalyzer: false,
    generateStatsFile: false,
    logLevel: 'info',
  }),
  new webpack.HashedModuleIdsPlugin(),
];

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
  new Dotenv({
    safe: true,
    systemvars: true,
  }),
];

const plugins = commonPlugins.concat(isProduction ? prodPlugins : devPlugins);

module.exports = {
  mode: isProduction ? 'production' : 'development',

  entry: './src/index',

  output: {
    filename: isProduction ? 'app.[chunkhash:8].js' : 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devtool: isProduction ? 'source-map' : 'eval',

  bail: isProduction,

  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT || 8080,
  },

  plugins,
};
