const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { _resolve } = require('./common');
const config = require('./webpack.config');

module.exports = merge(config, {
  entry: [
    'webpack-hot-middleware/client',
    _resolve('../src/main.ts')
  ],
  output: {
    filename: '[name].[fullhash:8].js?cv=[fullhash:8]',
    chunkFilename: '[id].js?cv=[fullhash:8]',
    publicPath: '/'
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      filename: 'index.html',
      template: '../public/index.ejs',
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})