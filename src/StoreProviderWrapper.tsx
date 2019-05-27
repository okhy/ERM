import { StateTypes } from "Types";
// react
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
import thunk from "redux-thunk";
// reducers
import globalReducer from "./global.reducer";
import searchPageReducer from "Views/SearchPage/SearchPage.reducer";
import detailsPageReducer from "Views/DetailsPage/DetailsPage.reducer";

const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const initialState: any = !!window.__PRELOADED_STATE__
  ? window.__PRELOADED_STATE__
  : null;

export const rootReducer: Reducer<
  StateTypes.applicationState
> = combineReducers({
  global: globalReducer,
  searchPage: searchPageReducer,
  detailsPage: detailsPageReducer
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
type StoreProviderWrapperPropsType = { providedStore?: any };

const StoreProviderWrapper: React.SFC<StoreProviderWrapperPropsType> = ({
  providedStore,
  children
}) => <Provider store={providedStore || store}>{children}</Provider>;

export default StoreProviderWrapper;
