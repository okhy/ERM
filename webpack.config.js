const webpack = require("webpack");
const path = require("path");

module.exports = (env, options) => ({
  entry: path.resolve(__dirname, "src/index.tsx"),
  devtool: env.mode === "production" ? "none" : "source-map",
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".css"],
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
      Views: path.resolve(__dirname, "./src/views"),
      Services: path.resolve(__dirname, "./src/services"),
      App: path.resolve(__dirname, "./src"),
      Types: path.resolve(__dirname, "./src/types.d.ts"),
      Mocks: path.relative(__dirname, "./__mocks__")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "/node_modules"),
        use: ["babel-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: path.resolve(__dirname, "/node_modules"),
        use: ["awesome-typescript-loader"]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              import: true,
              modules: true,
              sourceMap: true,
              localIdentName: "[local]--[hash:base64:10]",
              importLoaders: 1
            }
          },
          { loader: "typed-css-modules-loader" }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8080
  },
  output: {
    path: path.resolve(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js"
  }
});
