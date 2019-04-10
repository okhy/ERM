import searchActionTypes, { movieSearch, getMovie } from "./SearchPage.actions";
import globalActionTypes from "Root/global.actions";
import { movieListMock } from "Mocks/moviesMocks";

describe("SearchPage action creators ...", () => {
  it("... call dispatch function", () => {
    const mockDispatch = jest.fn();
    const mockQuery = {
      search: "test title",
      sortBy: "desc"
    };

    movieSearch(mockQuery)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalled();
  });
  it("... return proper searchMovies action", () => {
    const mockQuery = {
      search: "test title",
      sortBy: "desc"
    };
    const expectedActionObject = {
      type: searchActionTypes.getMovieList,
      payload: mockQuery
    };

    expect(movieSearch(mockQuery)(() => {})).toEqual(expectedActionObject);
  });
  it("... dispatch proper Error action", () => {
    const mockDispatch = jest.fn();
    const mockQuery = {
      search: "test title",
      sortBy: "desc"
    };
    const mockError = new Error("test error");
    const errorAction = {
      type: globalActionTypes.fetchError,
      payload: mockError
    };

    (global as any).fetch = jest.fn(() => mockError);

    getMovie(mockDispatch, mockQuery);

    expect(window.fetch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(errorAction);
  });
  it("... dispatch proper Result action", () => {
    const mockDispatch = jest.fn();
    const mockQuery = {
      search: "Pulp"
    };
    const responseAction = {
      type: searchActionTypes.getMovieListResponse,
      payload: movieListMock
    };

    (global as any).fetch = jest.fn(() => movieListMock);

    getMovie(mockDispatch, mockQuery);

    expect(mockDispatch).toHaveBeenCalledWith(responseAction);
  });
});
