import { GenericAction } from "Types";
import globalActionTypes from "./global.actions";

type initialStateType = {
  fetching: {
    status: boolean;
    error: false | Error;
  };
};

type globalReducerType = (
  state: initialStateType,
  action: GenericAction<any>
) => initialStateType;

const initialState: initialStateType = {
  fetching: {
    status: false,
    error: false
  }
};

const globalReducer: globalReducerType = (state = initialState, action) => {
  switch (action.type) {
    case globalActionTypes.fetchToggle:
      return {
        ...state,
        fetching: {
          status: action.payload,
          error: false
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
