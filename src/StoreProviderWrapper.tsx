import { StateTypes } from "Types";
// react
import * as React from "react";
// Redux
import { createStore, combineReducers, applyMiddleware, Reducer } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// reducers
import globalReducer from "./global.reducer";
import searchPageReducer from "Views/SearchPage/SearchPage.reducer";
import detailsPageReducer from "Views/DetailsPage/DetailsPage.reducer";

const initialState: Object | undefined =
  typeof window != "undefined" && !!window.__PRELOADED_STATE__
    ? window.__PRELOADED_STATE__
    : undefined;

export const rootReducer: Reducer<
  StateTypes.applicationState
> = combineReducers({
  global: globalReducer,
  searchPage: searchPageReducer,
  detailsPage: detailsPageReducer
});

type StoreProviderWrapperPropsType = { providedState?: any };
const StoreProviderWrapper: React.SFC<StoreProviderWrapperPropsType> = ({
  providedState,
  children
}) => {
  const store = createStore(
    rootReducer,
    providedState || initialState,
    applyMiddleware(thunk)
  );

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProviderWrapper;
