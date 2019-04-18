import { MovieTypes, ReduxTypes } from "Types";
import searchActionTypes, { movieSearch } from "./SearchPage.actions";
import { toggleFetchStatus } from "Root/global.actions";

const mockQuery: MovieTypes.MovieListQuery = {
  search: "test title",
  searchBy: "title",
  sortBy: "desc"
};
const responseObj = {
  json: (): { data: MovieTypes.IMovie[] } => ({
    data: [
      {
        id: 1,
        title: "Movie in array",
        genres: ["genre1", "genre2"],
        poster: undefined,
        releaseDate: undefined,
        rating: 4
      }
    ]
  })
};

const getMockFetch = (type: "resolve" | "reject") => {
  if (type === "resolve") {
    return jest.fn(() => Promise.resolve(responseObj));
  }
  return jest.fn(() => Promise.reject(new Error("test error")));
};

describe("SearchPage action creators ...", () => {
  it("... call dispatch function", () => {
    (global as any).fetch = jest.fn(getMockFetch("resolve"));

    const mockDispatch = jest.fn();

    movieSearch(mockQuery)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(toggleFetchStatus(true));
  });
  it("... return proper searchMovies action", () => {
    (global as any).fetch = jest.fn(getMockFetch("resolve"));

    const expectedActionObject: ReduxTypes.PayloadAction<
      MovieTypes.MovieListQuery
    > = {
      type: searchActionTypes.getMovieList,
      payload: mockQuery
    };

    expect(movieSearch(mockQuery)(jest.fn())).toEqual(expectedActionObject);
  });
});
