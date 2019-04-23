// react
import * as React from "react";
import * as ReactDOM from "react-dom";

// components
import WithError from "Components/WithError/withError";
import Routes from "./Routing";
import StoreProviderWrapper from "./StoreProviderWrapper";
// assets
import * as styles from "./global.css";
import * as resetCSS from "./reset.css";
// init styles for whole app
styles;
resetCSS;

export interface IErrorHandlerFunction {
  (error: Error, errorInfo: React.ErrorInfo): void;
}

const errorHandler: IErrorHandlerFunction = (error, errorInfo) => {
  console.log(error, errorInfo);
};

ReactDOM.render(
  <div className="app-container">
    <StoreProviderWrapper>
      <WithError errorCallback={errorHandler}>
        <Routes />
      </WithError>
    </StoreProviderWrapper>
  </div>,
  document.getElementById("app")
);
