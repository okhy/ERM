const webpack = require("webpack");

module.exports = (env, options) => {
  const isProduction = env.mode === "production";

  const config = {
    entry: "./src/index.jsx",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(ttf|eot|svg|woff|png)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]?[hash]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
        ReactDOM: "react-dom"
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      hot: true,
      contentBase: "./dist"
    },
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "bundle.js"
    }
  };

  return config;
};
