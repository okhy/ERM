import * as React from "react";
import ReactDOMServer from "react-dom/server";
// components
import Template from "./template";
import App from "App/index";

const renderTemplate = ReactDOMServer.renderToStaticMarkup(
  <Template>
    <App />
    <span>Andrzej</span>
  </Template>
);
export default renderTemplate;
