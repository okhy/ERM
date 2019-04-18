import globalActionTypes, {
  toggleFetchStatus,
  fetchError
} from "./global.actions";

describe("Global actions tests...", () => {
  it("... creates toggleFetchStatus action", () => {
    const action = toggleFetchStatus(true);
    expect(action.type).toEqual(globalActionTypes.toggleFetchStatus);
    expect(action.payload).toEqual(true);
  });
  it("... creates fetchError action ", () => {
    const mockError = new Error("test error");
    const action = fetchError(mockError);
    expect(action.type).toEqual(globalActionTypes.setFetchError);
    expect(action.payload).toEqual(mockError);
  });
});
