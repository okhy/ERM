import { StateTypes } from "Types";

import * as React from "react";
// Redux
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Reducer
} from "redux";
import { Provider } from "react-redux";
// redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
// reducers
import globalReducer from "./global.reducer";
import searchPageReducer from "Views/SearchPage/SearchPage.reducer";
import detailsPageReducer from "Views/DetailsPage/DetailsPage.reducer";

const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const persistConfig = {
  key: "root",
  storage
};

export const rootReducer: Reducer<
  StateTypes.applicationState
> = combineReducers({
  global: globalReducer,
  searchPage: searchPageReducer,
  detailsPage: detailsPageReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);

import thunk from "redux-thunk";

const StoreProviderWrapper: React.SFC = props => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {props.children}
    </PersistGate>
  </Provider>
);

export default StoreProviderWrapper;
