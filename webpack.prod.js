const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')()
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].scss',
    }),
  ]
})