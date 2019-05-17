import * as React from "react";

const Template: React.SFC = props => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <title>Server Side Rendered React App!!</title>
    </head>
    <body>
      <div id="app">{props.children}</div>
      <script src="bundle.js" />
    </body>
  </html>
);

export default Template;
