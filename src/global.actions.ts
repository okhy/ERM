import { ActionCreator, ActionTypeMap } from "Types";

const globalActionTypes: ActionTypeMap = {
  fetchToggle: "FETCHING_TOGGLE",
  fetchError: "FETCHING_ERROR"
};

export default globalActionTypes;

export const toggleFetchStatus: ActionCreator<boolean> = status => ({
  type: globalActionTypes.fetchToggle,
  payload: status
});

export const fetchError: ActionCreator<Error> = error => ({
  type: globalActionTypes.fetchError,
  payload: error
});
