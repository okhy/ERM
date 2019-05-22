const path = require("path");

module.exports = env => {
  const isProduction = !!env && !!env.mode && env.mode === "production";
  return {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    output: {
      path: path.resolve(__dirname, "./dist"),
      publicPath: path.resolve(__dirname, "./"),
      filename: "bundle.js",
      pathinfo: true
    },
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
    // options
    watch: !isProduction,
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    // loaders
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
    }
  };
};
