var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: {
    'index': process.cwd() + '/src/index'
  },
  output: {
    filename: '[name].js',
    path: process.cwd() + '/dist'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.less/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192&name=./img/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV: JSON.stringify(true)
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  postcss: function () {
    return [require('autoprefixer')]
  }
}