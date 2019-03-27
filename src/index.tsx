import * as React from "react";
import * as ReactDOM from "react-dom";
// components
import WithError from "./components/WithError/WithError";
// views
import SearchPage from "./views/SearchPage/SearchPage";
// assets
import * as styles from "./global.css";
import * as resetCSS from "./reset.css";
/* tslint:disable */
// init styles
resetCSS.main;
styles.main;
/* tslint:enable */

ReactDOM.render(
  <div className="app-wrapper">
    <WithError>
      <SearchPage />
    </WithError>
  </div>,
  document.getElementById("app")
);
