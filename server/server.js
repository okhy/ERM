// imports
const path = require("path");
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
// components
// const Template = require("./template");
// const App = require("./../src/index");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", async (req, res, next) => {
  //   const html = ReactDOMServer.renderToStaticMarkup(
  //     <Template>
  //       {/* <App /> */}
  //       <span>Andrzej</span>
  //     </Template>
  //   );

  // const html = ReactDOMServer.renderToStaticMarkup(Template);
  const html = ` <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Server Side Rendered React App!!</title>
      </head>
      <body>
        <div id="app">Plain string content</div>
        <script src="bundle.js" />
      </body>
    </html>`;

  res.send(`<!doctype html>${html}`);
});

app.listen(port, () => console.log(`listening on :${port}`));
