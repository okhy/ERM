const path = require("path");

const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.config.common");

console.log(
  `
server path:`,
  path.resolve(__dirname, "./../server"),
  `
`
);

module.exports = merge(common(process.env), {
  name: "server",
  target: "node",
  entry: "./src/server/renderTemplate.tsx",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "./../server"),
    filename: "renderTemplate.js",
    pathinfo: true
  }
});
