const path = require('path')
const webpack = require('webpack')

const config = {
  entry: [
    path.resolve(__dirname, 'main.js'),
    'webpack-hot-middleware/client'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: ['babel'],
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config
