import * as React from "react";
import * as ReactDOM from "react-dom";
// components
import WithError from "./components/WithError/WithError";
import Button from "./components/Button/Button";

ReactDOM.render(
  <div className="erm-main-wrapper">
    <WithError>
      <h1>Hello React</h1>
      <Button label="test button" />
    </WithError>
  </div>,
  document.getElementById("app")
);
