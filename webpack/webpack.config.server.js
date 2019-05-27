const path = require("path");

const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.config.common");

module.exports = merge(common(process.env), {
  name: "server",
  target: "node",
  entry: "./src/server/server.ts",
  output: {
    path: path.resolve(__dirname, "./../server"),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              import: true,
              modules: true,
              sourceMap: true,
              localIdentName: "[local]--[hash:base64:10]"
            }
          }
        ]
      }
    ]
  }
});
