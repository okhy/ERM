const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.config.common");

const serverConfig = merge(
  common({ mode: process.env.mode, isServer: true }),
  {
    name: "server",
    entry: "./src/server/server.ts",
    target: "node",
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, "./../server"),
      filename: "server.js"
    }
  }
);

module.exports = serverConfig;
