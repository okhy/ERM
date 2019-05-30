import * as merge from "webpack-merge";
import common from "./webpack.config.common";
import * as path from "path";
import webpack = require("webpack");

const clientConfig: webpack.Configuration = merge(
  common({ mode: process.env.mode }),
  {
    name: "client",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "./../dist"),
      filename: "bundle.js"
    }
  }
);

export default clientConfig;
