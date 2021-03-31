const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      DEBUG:JSON.stringify(true)
    })
  ]
})