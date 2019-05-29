const path = require("path");

module.exports = ({ mode, isServer }) => {
  const isProduction = !!mode && mode === "production";
  return {
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".css"],
      alias: {
        Components: path.resolve(__dirname, "./../src/components"),
        Views: path.resolve(__dirname, "./../src/views"),
        Services: path.resolve(__dirname, "./../src/services"),
        App: path.resolve(__dirname, "./../src"),
        Types: path.resolve(__dirname, "./../src/types.d.ts"),
        Mocks: path.resolve(__dirname, "./../__mocks__")
      }
    },
    // options
    watch: !isProduction,
    mode: mode || "development",
    devtool: isProduction ? "none" : "source-map",
    stats: isProduction ? "none" : "verbose",
    // loaders
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: path.resolve(__dirname, "/node_modules"),
          use: ["awesome-typescript-loader"]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: !isServer ? "style-loader" : "isomorphic-style-loader"
            },
            {
              loader: "css-loader",
              options: {
                import: !isServer,
                modules: true,
                sourceMap: !isServer,
                localIdentName: "[local]--[hash:base64:10]",
                importLoaders: 1,
                exportOnlyLocals: !!isServer
              }
            },
            { loader: "typed-css-modules-loader" }
          ]
        }
      ]
    }
  };
};
