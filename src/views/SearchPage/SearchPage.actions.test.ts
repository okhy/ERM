import searchActionTypes, { movieSearch, getMovie } from "./SearchPage.actions";
import globalActionTypes from "Root/global.actions";
import { MovieListQuery, IMovie, PayloadAction } from "Types";

describe("SearchPage action creators ...", () => {
  it("... call dispatch function", () => {
    const mockDispatch = jest.fn();
    const mockQuery: MovieListQuery = {
      search: "test title",
      searchBy: "title",
      sortBy: "desc"
    };

    movieSearch(mockQuery)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalled();
  });
  it("... return proper searchMovies action", () => {
    const mockQuery: MovieListQuery = {
      search: "test title",
      searchBy: "title",
      sortBy: "desc"
    };
    const expectedActionObject: PayloadAction<MovieListQuery> = {
      type: searchActionTypes.getMovieList,
      payload: mockQuery
    };

    expect(movieSearch(mockQuery)(() => {})).toEqual(expectedActionObject);
  });
  it("... dispatch proper Error action", () => {
    const mockDispatch = jest.fn();
    const mockFetch = jest.fn(() => mockError);
    const mockQuery: MovieListQuery = {
      search: "test title",
      searchBy: "title",
      sortBy: "desc"
    };
    const mockError = new Error("test error");
    const errorAction: PayloadAction<Error> = {
      type: globalActionTypes.fetchError,
      payload: mockError
    };
    (global as any).fetch = mockFetch;

    getMovie(mockDispatch, mockQuery);

    expect(mockFetch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(errorAction);
  });
  it("... dispatch proper Result action", () => {
    const mockDispatch = jest.fn();
    const mockQuery: MovieListQuery = {
      search: "Pulp",
      searchBy: "title"
    };
    const mockMovieList: IMovie[] = [
      {
        id: 1,
        title: "test title"
      }
    ];
    const responseAction: PayloadAction<IMovie[]> = {
      type: searchActionTypes.getMovieListResponse,
      payload: mockMovieList
    };

    (global as any).fetch = jest.fn(() => mockMovieList);

    getMovie(mockDispatch, mockQuery);

    expect(mockDispatch).toHaveBeenCalledWith(responseAction);
  });
});
