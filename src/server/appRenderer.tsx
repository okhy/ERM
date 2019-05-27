import * as React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
// components
import App from "./../";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// components
// import App from "App/index";
export type headInjectType = {
  link: string;
  rel: "stylesheet";
  integrity?: string;
  crossorigin?: string;
};

type renderToStringType = (html: string) => string;
const wrapAppStringWithTemplate: renderToStringType = html => `<!DOCTYPE html>
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

// const TestComponent: React.SFC = () => {
//   return <span>Andrzej2</span>;
// };

const store = {};
const wrappedApp = renderToString(<App router={StaticRouter} store={store} />);

const renderedTemplate: string = wrapAppStringWithTemplate(wrappedApp);

export default wrapAppStringWithTemplate;
export { renderedTemplate };
