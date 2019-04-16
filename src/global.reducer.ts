import { ReduxTypes, StateTypes } from "Types";
import globalActionTypes from "./global.actions";

type globalReducerType = (
  state: StateTypes.globalState,
  action: ReduxTypes.GenericAction<any>
) => StateTypes.globalState;

const initialState: StateTypes.globalState = {
  fetching: {
    status: false,
    error: false
  }
};

const globalReducer: globalReducerType = (state = initialState, action) => {
  switch (action.type) {
    case globalActionTypes.toggleFetchStatus:
      return {
        ...state,
        fetching: {
          status: action.payload,
          error: false
        }
      };
    case globalActionTypes.setfetchError:
      return {
        ...state,
        fetching: {
          status: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
};

export default globalReducer;
