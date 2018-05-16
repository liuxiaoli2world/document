const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const cssExtract = new ExtractTextWebpackPlugin('style.css')

const isDev = process.env.NODE_ENV === 'development'
const config = {
  // mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: '[name]-[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000, name: '[name]-eee.[ext]' }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      title: 'hello webpack!',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        conservativeCollapse: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: isDev ? '"development"' : '"production"' }
    })
  ]
}

if (isDev) {
  config.devtool = 'cheap-module-eval-source-map'
  config.devServer = {
    port: 8090,
    host: '0.0.0.0',
    hot: true,
    overlay: { error: true }
  }
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader']
  })
  config.module.rules.push({
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      { loader: 'postcss-loader', options: { sourceMap: true } },
      'less-loader'
    ]
  })

  config.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  config.entry = {
    main: path.join(__dirname, 'src/index.js'),
    vender: ['react', 'react-dom', 'jquery']
  }
  config.output.filename = '[name]-[chunkhash:8].js'
  config.module.rules.push({
    test: /\.less$/,
    use: cssExtract.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        { loader: 'postcss-loader', options: { sourceMap: true } },
        'less-loader'
      ]
    })
  })

  config.plugins.push(cssExtract)
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender'
    })
  )
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  )
}

module.exports = config
