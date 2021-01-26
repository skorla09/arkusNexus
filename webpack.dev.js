const {merge} = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common')()

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
})
