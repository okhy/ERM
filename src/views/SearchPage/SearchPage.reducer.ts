import { ActionType } from "AppRoot/types";

export default (state: any, action: ActionType) => {
  switch (action.type) {
    case "FETCH_SEARCH_SEND":
      return { ...state, fetching: true };
    case "FETCH_SEARCH_RECEIVE":
      return {
        ...state,
        movies: action.payload,
        fetching: false,
        fetchError: false
      };
    case "FETCH_SEARCH_ERROR":
      return { ...state, fetching: false, fetchError: true };
    default:
      return state;
  }
};
