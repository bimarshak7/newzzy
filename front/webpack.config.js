const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: __dirname,
    filename: 'main.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    fallback: {
      "path": false,
      "crypto": false,
      "buffer": false,
      "https": false,
      "url": false,
      "http": false,
      "vm": false,
      "querystring": false,
      "os": false,
      "stream": false,
      "constants": false,
      "assert": false,
      "fs": false,
      "worker_threads": false,
      "child_process": false,
      "inspector": false

    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node-modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

    ]
  }
}