// imports
const express = require("express");
const renderTemplate = require("./renderTemplate");
const app = express();

const isProduction =
  !!process.env && !!process.env.mode && process.env.mode === "production";

if (!isProduction) {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackConfig = require("../webpack.config");

  const compiler = webpack(webpackConfig(process.env));

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static("dist"));
}

const templateMiddleware = (req, res) => {
  res.send(renderTemplate());
};

app.use(templateMiddleware);

// run server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on :${port}`));
