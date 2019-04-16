import { StateType } from "Root/types";
import * as React from "react";
import * as ReactDOM from "react-dom";
// views
import SearchPage from "Views/SearchPage/SearchPage";
// assets
import * as styles from "./global.css";
import * as resetCSS from "./reset.css";
// Redux
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Reducer
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// reducers
import globalReducer from "./global.reducer";
import searchPageReducer from "Views/SearchPage/SearchPage.reducer";
// components
import WithError from "Components/WithError/withError";
// init styles for whole app
styles;
resetCSS;

const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

export interface ApplicationState {
  global: StateType.globalState;
  searchPage: StateType.searchPageState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers({
  global: globalReducer,
  searchPage: searchPageReducer
});

console.log(rootReducer);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
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
