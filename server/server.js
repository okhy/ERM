// imports
const express = require("express");
const app = express();

// code running webpack along with the server
// const isProduction =
// !!process.env && !!process.env.mode && process.env.mode === "production";

// if (!isProduction) {
//   const webpack = require("webpack");
//   const webpackDevMiddleware = require("webpack-dev-middleware");
//   const webpackHotMiddleware = require("webpack-hot-middleware");
//   const webpackHotServerMiddleware = require("webpack-hot-middleware");
//   const webpackConfig = require("./../webpack.config");

//   const compiler = webpack(webpackConfig);

//   app.use(webpackDevMiddleware(compiler));
//   app.use(webpackHotMiddleware(compiler));
//   app.use(webpackHotServerMiddleware(compiler));
// } else {
// }
const importedObject = require("./renderTemplate");

const templateMiddleware = (req, res) => {
  console.log("imported object: ", importedObject);
  res.send("renderedApp");
  // res.send(renderedApp);
};

app.use(express.static("dist"));
app.use(templateMiddleware);

// run server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on :${port}`));
