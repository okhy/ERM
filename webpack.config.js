const webpack = require("webpack");

module.exports = (env, options) => {
  const isProduction = env.mode === "production";

  const config = {
    entry: "./src/index.tsx",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    resolve: {
      alias: {
        Components: path.resolve(__dirname, "src/components"),
        Views: path.resolve(__dirname, "src/views"),
        HOC: path.resolve(__dirname, "src/hoc"),
        Index: path.resolve(__dirname, "src")
      },
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["awesome-typescript-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader?modules&sourceMap", "typed-css-modules-loader"]
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
    plugins: [new webpack.HotModuleReplacementPlugin()],
    // devServer: {
    //   hot: true,
    //   contentBase: "./dist"
    // },
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "bundle.js"
    }
  };

  return config;
};
