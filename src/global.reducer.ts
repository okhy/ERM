import { ActionType } from "Types";
import globalActionTypes from "./global.actions";

type initialStateType = {
  fetching: {
    status: boolean;
    error: false | Error;
  };
};

const initialState: initialStateType = {
  fetching: {
    status: false,
    error: false
  }
};

const globalReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case globalActionTypes.fetchToggle:
      return {
        ...state,
        fetching: {
          status: action.payload
        }
      };
    case globalActionTypes.fetchError:
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
