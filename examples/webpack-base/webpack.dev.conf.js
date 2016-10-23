var config = require('../../build/webpack.base.conf')

config.entry = {
  app: __dirname + '/src/main'
}

var hotServer = require('../../build/hot-server')
config.entry = hotServer(config.entry)

var htmlPlugin = require('../../build/html-plugin')
config.plugins = (config.plugins || []).concat(htmlPlugin)

module.exports = config