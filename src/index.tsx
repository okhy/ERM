// react
import * as React from "react";
import * as ReactDOM from "react-dom";

// components
import WithError from "Components/WithError/WithError";
import Routes from "./Routing";
import StoreProviderWrapper from "./StoreProviderWrapper";
// assets
import * as styles from "./global.css";
import "./reset.css";
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
  router?: any;
};
const App: React.SFC<AppPropsType> = ({ router }) => (
  <div className="app-container">
    <WithError errorCallback={errorHandler}>
      <StoreProviderWrapper>
        <Routes router={router} />
      </StoreProviderWrapper>
    </WithError>
  </div>
);

ReactDOM.hydrate(<App />, document.getElementById("app"));

export default App;
