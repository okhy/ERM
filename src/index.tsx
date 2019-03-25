import * as React from "react";
import * as ReactDOM from "react-dom";
// components
// hoc
import withError from "./hoc/withError/withError";

const HelloComponent = () => <h1>Hello React</h1>;
const ComponentWithError = withError(HelloComponent);

ReactDOM.render(
  <div className="erm-main-wrapper">
    <ComponentWithError />
  </div>,
  document.getElementById("app")
);
