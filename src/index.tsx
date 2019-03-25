import * as React from "react";
import * as ReactDOM from "react-dom";
// components
import FunctionalComponent from "Components/FunctionalComponent/FunctionalComponent";
import ClassComponent from "Components/ClassComponent/ClassComponent";
import PureComponent from "Components/PureComponent/PureComponent";
import MethodComponent from "Components/MethodComponent/MethodComponent";

ReactDOM.render(
  <div className="component-wrapper">
    <h1>Hello React</h1>
    <br />
    <FunctionalComponent />

    <br />
    <ClassComponent />
    <br />
    <PureComponent />
    <br />
    {MethodComponent}
  </div>,
  document.getElementById("app")
);
