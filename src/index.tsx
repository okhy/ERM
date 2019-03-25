import * as React from "react";
import * as ReactDOM from "react-dom";
// components
import WithError from "./components/WithError/WithError";
// views
import SearchPage from "./views/SearchPage/SearchPage";

ReactDOM.render(
  <div className="erm-main-wrapper">
    <WithError>
      <SearchPage />
    </WithError>
  </div>,
  document.getElementById("app")
);
