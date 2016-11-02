var config = require('./webpack.base.conf')
var uglifyjs = require('./uglify-js-plugin')

config.devtool = '#eval-source-map'
config.plugins = (config.plugins || []).concat(uglifyjs)

module.exports = config