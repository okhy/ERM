import renderTemplate from "./renderTemplate";

describe("Template rendered funciton...", () => {
  it("... renders passed html", () => {
    const testHtml = "test";
    const renderedHtml = renderTemplate(testHtml);

    expect(renderedHtml).toEqual(`<!DOCTYPE html>
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
    <div id="app">${testHtml}</div>
    <script src="./bundle.js"></script>
  </body>
</html>`);
  });
});
