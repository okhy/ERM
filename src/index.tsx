import { StateTypes } from "Types";
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
// redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
// components
import WithError from "Components/WithError/withError";
// init styles for whole app
styles;
resetCSS;

const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const persistConfig = {
  key: "root",
  storage
};

export interface ApplicationState {
  global: StateTypes.globalState;
  searchPage: StateTypes.searchPageState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers({
  global: globalReducer,
  searchPage: searchPageReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);

export interface IErrorHandlerFunction {
  (error: Error, errorInfo: React.ErrorInfo): void;
}

const errorHandler: IErrorHandlerFunction = (error, errorInfo) => {
  console.log(error, errorInfo);
};

ReactDOM.render(
  <div className="app-container">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WithError errorCallback={errorHandler}>
          <SearchPage />
        </WithError>
      </PersistGate>
    </Provider>
  </div>,
  document.getElementById("app")
);
