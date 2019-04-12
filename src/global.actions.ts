import { ActionCreator } from "Types";

enum globalActionTypes {
  toggleFetchStatus = "TOGGLE_FETCHING_STATUS",
  setfetchError = "SET_FETCHING_ERROR"
}

export default globalActionTypes;

export const toggleFetchStatus: ActionCreator<boolean> = status => ({
  type: globalActionTypes.toggleFetchStatus,
  payload: status
});

export const fetchError: ActionCreator<Error> = error => ({
  type: globalActionTypes.setfetchError,
  payload: error
});
