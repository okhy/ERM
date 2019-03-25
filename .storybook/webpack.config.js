const path = require("path");
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules&sourceMap", "typed-css-modules-loader"]
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
