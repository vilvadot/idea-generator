const path = require('path');
require('dotenv').config()

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {EnvironmentPlugin} = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const EnvironmentVariables = new EnvironmentPlugin(['API_URI', 'NODE_ENV'])

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  devServer : {
    port: 7777,
    host: "0.0.0.0"
  },
  plugins: [
    HtmlWebpackPluginConfig, 
    EnvironmentVariables
  ]
}