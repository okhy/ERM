// import * as React from "react";
// import * as ReactDOMServer from "react-dom/server";
// components
// import App from "App/index";

const renderTemplate = () => {
  return `<!DOCTYPE html>
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
    <div id="app"></div>
    <script src="./bundle.js"></script>
  </body>
</html>`;
};

module.exports = renderTemplate;
