import * as React from "react";
import * as ReactDOM from "react-dom";
// components
import WithError from "Components/WithError/WithError";
// views
import SearchPage from "Views/SearchPage/SearchPage";

ReactDOM.render(
  <div className="erm-main-wrapper">
    <WithError>
      <SearchPage />
    </WithError>
  </div>,
  document.getElementById("app")
);
