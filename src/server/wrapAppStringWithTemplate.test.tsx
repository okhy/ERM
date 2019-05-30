import * as React from "react";
import wrapAppStringWithTemplate from "./wrapAppStringWithTemplate";
import { renderToString } from "react-dom/server";

describe("wrapAppStringWithTemplate...", () => {
  it("... renders passed react element", () => {
    const TestReactElement = () => <span>Test component</span>;
    const expectedHtml = `<!DOCTYPE html>
<html>
  <head>
    <title>Epam React Mentoring Project - SSR</title>
    <link href="main.css" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div id="app">${renderToString(<TestReactElement />)}</div>
    <script src="./bundle.js"></script>
  </body>
</html>`;

    const renderedHtml = wrapAppStringWithTemplate(
      renderToString(<TestReactElement />)
    );

    expect(renderedHtml).toEqual(expectedHtml);
  });
});
