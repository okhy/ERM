import * as React from "react";
import * as ReactDOM from "react-dom";
// components
import WithError from "Components/WithError/withError";
// views
import SearchPage from "Views/SearchPage/SearchPage";
// assets
import * as styles from "./global.css";
import * as resetCSS from "./reset.css";
// init styles for whole app
styles;
resetCSS;
// Redux
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// reducers
import globalReducer from "./global.reducer";
import searchPageReducer from "Views/SearchPage/SearchPage.reducer";
// actions
// import { movieSearch } from "Views/SearchPage/SearchPage.actions";
// import { fetchMovieById } from "Views/DetailsPage/DetailsPage.actions";
// todo: detailsPageReducer

const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

export const rootReducer = combineReducers({
  globalReducer,
  searchPageReducer
});

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
