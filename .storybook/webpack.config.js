const path = require("path");

module.exports = {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      Components: path.resolve(__dirname, "./../src/components"),
      Views: path.resolve(__dirname, "./../src/views"),
      HOC: path.resolve(__dirname, "./../src/hoc"),
      Index: path.resolve(__dirname, "./../src"),
      Mocks: path.relative(__dirname, "./../__mocks__")
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
  }
};
