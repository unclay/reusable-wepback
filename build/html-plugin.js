var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: process.cwd() + '/src/index.html',
    chunks: []
  })
]