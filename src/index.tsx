// react
import * as React from "react";
import * as ReactDOM from "react-dom";

// components
import WithError from "Components/WithError/WithError";
import Routes, { RouterType } from "./Routing";
import StoreProviderWrapper from "./StoreProviderWrapper";
// assets
import * as styles from "./global.css";
import "./reset.css";
import { BrowserRouter } from "react-router-dom";
// init styles for whole app
styles;
// resetCSS;

export interface IErrorHandlerFunction {
  (error: Error, errorInfo: React.ErrorInfo): void;
}

const errorHandler: IErrorHandlerFunction = (error, errorInfo) => {
  console.log(error, errorInfo);
};

type AppPropsType = {
  router: RouterType;
  errorHandler: IErrorHandlerFunction;
};
const App: React.SFC<AppPropsType> = ({ router, errorHandler }): any => (
  <div className="app-container">
    <WithError errorCallback={errorHandler}>
      <StoreProviderWrapper>
        <Routes PassedRouter={router} />
      </StoreProviderWrapper>
    </WithError>
  </div>
);

if (typeof document != "undefined") {
  ReactDOM.hydrate(
    <App router={BrowserRouter} errorHandler={errorHandler} />,
    document.getElementById("app")
  );
}
export default App;
