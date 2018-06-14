const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const cssExtract = new ExtractTextWebpackPlugin('[name]-one.css')
// const lessExtract = new ExtractTextWebpackPlugin('[name]-two.css')
//const SassExtract = new ExtractTextWebpackPlugin('stylesheets/[name]-three.css')

//mini-css-extract-plugin

console.log(__dirname)

let isDev = process.env.NODE_ENV === 'development'

const config = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, './src/index.js')
  },
  output: {
    filename: 'name-[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-eee.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: isDev ? '"development"' : '"production"' }
    })
  ]
}

if (isDev) {
  config.devServer = {
    port: 8080,
    host: '0.0.0.0',
    open: true,
    hot: true,
    overlay: { error: true }
  }

  config.devtool = 'cheap-module-eval-source-map'
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  })
  config.module.rules.push({
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'less-loader'
    ]
  })
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  config.entry = {
    index: path.join(__dirname, './src/index.js'),
    vendor: ['react', 'react-dom']
  }
  config.output = {
    filename: '[name]-[chunkhash:8].js'
  }

  // config.module.rules.push({
  //   test: /\.css$/,
  //   use: cssExtract.extract(['css-loader', 'postcss-loader'])
  // })
  // config.module.rules.push({
  //   test: /\.less$/i,
  //   use: lessExtract.extract(['css-loader', 'less-loader'])
  // })
  // config.plugins.push(cssExtract)
  // config.plugins.push(lessExtract)
}

module.exports = config
