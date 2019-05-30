type renderToStringType = (store: any, html: string) => string;
const wrapAppStringWithTemplate: renderToStringType = (
  store,
  html
) => `<!DOCTYPE html>
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
    <div id="app">${html}</div>
    <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
      </script>
    <script src="bundle.js"></script>
  </body>
</html>`;

export default wrapAppStringWithTemplate;
