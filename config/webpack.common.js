const path = require("path");
const root = path.resolve(__dirname, "../");

module.exports = {
  target: "node",
  module: {
    rules: [
      {
        test: /.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          { loader: "ts-loader" },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  node: {
    global: false,
    __filename: true,
    __dirname: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.join(root, "dist"),
    filename: "index.js",
  },
};
