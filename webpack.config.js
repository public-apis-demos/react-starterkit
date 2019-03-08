const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const dist = path.resolve(__dirname, "public");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: dist,
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  mode: "development",
  devtool: "cheap-module-eval-source-map"
};
