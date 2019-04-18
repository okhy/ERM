import { ReduxTypes } from "Types";

enum globalActionTypes {
  toggleFetchStatus = "TOGGLE_FETCHING_STATUS",
  setFetchError = "SET_FETCHING_ERROR"
}

export default globalActionTypes;

export const toggleFetchStatus: ReduxTypes.PayloadActionCreator<
  boolean
> = status => ({
  type: globalActionTypes.toggleFetchStatus,
  payload: status
});

export const fetchError: ReduxTypes.PayloadActionCreator<Error> = error => ({
  type: globalActionTypes.setFetchError,
  payload: error
});
