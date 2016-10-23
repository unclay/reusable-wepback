module.exports = function (entry) {
  var hotClient = 'webpack-hot-middleware/client?path=./__webpack_hmr&noInfo=true&reload=true'
  Object.keys(entry).forEach(function (name, i) {
    var extras = [hotClient]
    entry[name] = extras.concat(entry[name])
  })
  return entry
}