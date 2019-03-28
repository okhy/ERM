const path = require("path");

module.exports = {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".css"],
    alias: {
      Components: path.resolve(__dirname, "./../src/components"),
      Views: path.resolve(__dirname, "./../src/views"),
      HOC: path.resolve(__dirname, "./../src/hoc"),
      Index: path.resolve(__dirname, "./../src")
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
              // camelCase: true,
              importLoaders: 1
              // exportOnlyLocals: true
            }
          },
          { loader: "typed-css-modules-loader" }
        ]
      }
    ]
  }
};
