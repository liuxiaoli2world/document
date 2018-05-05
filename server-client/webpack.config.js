const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[hash:4].js',
    path: path.resolve('dist'),
    publicPath: '/temp'
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/demo.html',
      hash: true
    }),
    new CleanWebpackPlugin('dist')
  ],
  devServer: {
    port: 8081,
    open: true,
    host: 'localhost',
    contentBase: './dist'
  },
  devtool: 'inline-source-map',
  mode: 'development'
};
