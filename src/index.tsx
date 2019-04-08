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
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import globalReducer from "./global.reducer";
import searchPageReducer from "./views/SearchPage/SearchPage.reducer";
// todo: detailsPageReducer

const store = createStore(
  combineReducers({ globalReducer, searchPageReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
