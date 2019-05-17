// imports
import express from "express";

const app = express();

app.get("/", async (req, res, next) => {
  if (process.env.mode === "development") {
    const webpack = require("webpack");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");
    const webpackConfig = require("../webpack.config");

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler));
  } else {
    app.use(express.static("./../../dist"));
  }
});

// res.send(`<!doctype html>${html}`);

app.use(require("../src/server/renderTemplate"));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on :${port}`));
