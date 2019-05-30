import * as path from "path";
import * as merge from "webpack-merge";
import * as nodeExternals from "webpack-node-externals";
import common from "./webpack.config.common";
import webpack = require("webpack");

const serverConfig: webpack.Configuration = merge(
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

export default serverConfig;
