/* eslint-disable @typescript-eslint/no-var-requires */
const NodemonPlugin = require("nodemon-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const root = path.resolve(__dirname, "../");

module.exports = {
  entry: ["webpack/hot/poll?100", "./src/index.ts"],
  watch: true,
  target: "node",
  externals: [
    nodeExternals({
      allowlist: ["webpack/hot/poll?100"],
    }),
  ],
  module: {
    rules: [
      {
        test: /.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin({ quite: true }),
    new NodemonPlugin({
      watch: path.resolve(root, "dist", "index.js"),
      script: path.resolve(root, "dist", "index.js"),
      verbose: false,
    }),
  ],
  output: {
    path: path.join(root, "dist"),
    filename: "index.js",
  },
};
