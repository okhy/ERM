import * as React from "react";
import * as ReactDOM from "react-dom";
// components
// hoc
import WithError from "./components/WithError/WithError";

ReactDOM.render(
  <div className="erm-main-wrapper">
    <WithError>
      <h1>Hello React</h1>
    </WithError>
  </div>,
  document.getElementById("app")
);
