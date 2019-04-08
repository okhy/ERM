import * as React from "react";
import * as ReactDOM from "react-dom";
// components
import WithError from "Components/WithError/WithError";
// views
import SearchPage from "Views/SearchPage/SearchPage";
// assets
import * as styles from "./global.css";
import * as resetCSS from "./reset.css";
// init styles for whole app
styles;
resetCSS;
// Redux store
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(() => {});

/** redux todo:
 * 1.import reducers
 * 2.combine
 * 3. create store
 * 4. provide store to the app
 */

export interface IErrorHandlerFunction {
  (error: Error, errorInfo: React.ErrorInfo): void;
}

const errorHandler: IErrorHandlerFunction = (error, errorInfo) => {
  console.log(error, errorInfo);
};

ReactDOM.render(
  <div className="app-container">
    <Provider store={store}>
      <WithError errorCallback={errorHandler}>
        <SearchPage />
      </WithError>
    </Provider>
  </div>,
  document.getElementById("app")
);
