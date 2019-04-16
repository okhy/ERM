import { GenericAction, StateType } from "Types";
import globalActionTypes from "./global.actions";

type globalReducerType = (
  state: StateType.globalState,
  action: GenericAction<any>
) => StateType.globalState;

const initialState: StateType.globalState = {
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
