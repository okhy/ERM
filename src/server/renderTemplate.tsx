import * as React from "react";
import { renderToString } from "react-dom/server";
// components
// import App from "App/index";

type renderToStringType = (html: string) => string;

const renderTemplate: renderToStringType = html => `<!DOCTYPE html>
<html>
  <head>
    <title>Epam React Mentoring Project - SSR</title>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div id="app">${html}</div>
    <script src="./bundle.js"></script>
  </body>
</html>`;

const TestComponent: React.SFC = () => <span>Andrzej</span>;

const renderedApp = renderTemplate(renderToString(<TestComponent />));

module.exports = { renderedApp };
export { renderedApp };
export default renderTemplate;
