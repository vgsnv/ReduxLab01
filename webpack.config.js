const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    compress: false,
    port: 9000
  }
}