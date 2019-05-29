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
  providedErrorHandler?: IErrorHandlerFunction;
  store?: any;
};
const App: React.SFC<AppPropsType> = ({
  router,
  providedErrorHandler,
  store
}) => (
  <div className="app-container">
    <WithError errorCallback={providedErrorHandler || errorHandler}>
      <StoreProviderWrapper providedStore={store}>
        <Routes router={router} />
      </StoreProviderWrapper>
    </WithError>
  </div>
);

if (typeof document != "undefined") {
  ReactDOM.hydrate(<App />, document.getElementById("app"));
}
export default App;
