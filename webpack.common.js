const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {

  const env = dotenv.config().parsed;
  
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  
  return {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
      //mode: process.env.NODE_ENV || 'development',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
      },
      devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
        port: 3000,
      },
      module: {
        rules: [
          {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss'],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html"),
        }),
        new webpack.DefinePlugin(envKeys),
        // new MiniCssExtractPlugin({
        //   filename: '[name].[contenthash].scss',
        // }),
      ],
  }
}
