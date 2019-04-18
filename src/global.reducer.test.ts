import globalReducer from "./global.reducer";
import { StateTypes } from "./types";
import { fetchError, toggleFetchStatus } from "./global.actions";

const initialState: StateTypes.globalState = {
  fetching: {
    status: false,
    error: false
  }
};

const mockedWrongAction = {
  type: "nonexistent action"
};

describe("Global reducer ...", () => {
  it("... returns initial state", () => {
    const state: StateTypes.globalState = globalReducer(
      undefined,
      mockedWrongAction
    );

    expect(state).toEqual(initialState);
  });
  it("... returns unchanged state", () => {
    const state: StateTypes.globalState = globalReducer(
      initialState,
      mockedWrongAction
    );
    expect(state).toEqual(initialState);
  });
  it("... toggles fetch status", () => {
    const state: StateTypes.globalState = globalReducer(
      initialState,
      toggleFetchStatus(true)
    );
    expect(state.fetching.error).toEqual(false);
    expect(state.fetching.status).toEqual(true);
  });
  it("... sets fetch error", () => {
    const mockError = new Error("test error");
    const state: StateTypes.globalState = globalReducer(
      initialState,
      fetchError(mockError)
    );
    expect(state.fetching.status).toEqual(false);
    expect(state.fetching.error).toEqual(mockError);
  });
});
