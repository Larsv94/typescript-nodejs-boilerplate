const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require("path");
const root = path.resolve(__dirname, "../");

module.exports = merge(common, {
  mode: "development",
  entry: ["webpack/hot/poll?100", "./src/index.ts"],
  devtool: "eval-cheap-module-source-map",
  externals: [
    nodeExternals({
      allowlist: ["webpack/hot/poll?100"],
    }),
  ],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin({ quite: true }),
    new NodemonPlugin({
      watch: path.resolve(root, "dist", "index.js"),
      script: path.resolve(root, "dist", "index.js"),
      verbose: false,
    }),
  ],
});
