var config = require('../../build/webpack.prod.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

config.entry = {
  app: __dirname + '/src/main'
}

var htmlPlugin = require('../../build/html-plugin')
config.plugins = (config.plugins || []).concat(htmlPlugin)

module.exports = config



