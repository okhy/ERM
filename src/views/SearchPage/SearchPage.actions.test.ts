import searchActionTypes, {
  movieSearch,
  getMovieList
} from "./SearchPage.actions";
import globalActionTypes from "Root/global.actions";
import { MovieListQuery, IMovie, PayloadAction } from "Types";

const mockQuery: MovieListQuery = {
  search: "test title",
  searchBy: "title",
  sortBy: "desc"
};
const mockMovieList: IMovie[] = [
  {
    id: 1,
    title: "test title",
  }
];
const mockError = new Error("test error");

describe("SearchPage action creators ...", () => {
  it("... call dispatch function", () => {
    const mockDispatch = jest.fn();
    movieSearch(mockQuery)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });
  it("... return proper searchMovies action", () => {
    const expectedActionObject: PayloadAction<MovieListQuery> = {
      type: searchActionTypes.getMovieList,
      payload: mockQuery
    };
    expect(movieSearch(mockQuery)(() => {})).toEqual(expectedActionObject);
  });
  it("... dispatch proper Error action", async () => {
    const mockDispatch = jest.fn();
    const mockFetch = jest.fn(() => Promise.reject(mockError));
    const errorAction: PayloadAction<Error> = {
      type: globalActionTypes.fetchError,
      payload: mockError
    };

    (global as any).fetch = mockFetch;

    await getMovieList(mockDispatch, mockQuery);

    expect(mockFetch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenLastCalledWith(errorAction);
  });
  it("... dispatch proper Result action", async () => {
    const mockDispatch = jest.fn();
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => ({ data: mockMovieList })
      })
    );
    const responseAction: PayloadAction<IMovie[]> = {
      type: searchActionTypes.getMovieListResponse,
      payload: mockMovieList
    };

    (global as any).fetch = mockFetch;

    await getMovieList(mockDispatch, mockQuery);

    expect(mockFetch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenLastCalledWith(responseAction);
  });
});
