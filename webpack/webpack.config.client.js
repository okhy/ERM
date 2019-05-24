const merge = require("webpack-merge");
const common = require("./webpack.config.common");

const path = require("path");

console.log(
  `
client path:`,
  path.resolve(__dirname, "./../dist"),
  `
`
);

module.exports = merge(common(process.env), {
  name: "client",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./../dist"),
    filename: "bundle.js",
    pathinfo: true
  }
});
