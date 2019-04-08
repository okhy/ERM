const globalActionTypes = {
  fetchToggle: "FETCHING_TOGGLE",
  fetchError: "FETCHING_ERROR"
};

export default globalActionTypes;

export const toggleFetchStatus = (status: boolean) => ({
  type: globalActionTypes.fetchToggle,
  payload: status
});

export const fetchError = (error: Error) => ({
  type: globalActionTypes.fetchError,
  payload: error
});
