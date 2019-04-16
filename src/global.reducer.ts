import { GenericAction, State } from "Types";
import globalActionTypes from "./global.actions";

type globalReducerType = (
  state: State.globalState,
  action: GenericAction<any>
) => State.globalState;

const initialState: State.globalState = {
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
