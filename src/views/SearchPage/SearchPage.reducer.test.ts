import { createStore } from "redux";
import { ReduxTypes, MovieTypes } from "Types";
import searchPageReducer from "./SearchPage.reducer";
import searchActionTypes from "./SearchPage.actions";

const mockedMovieList: MovieTypes.IMovie[] = [
  {
    id: 1,
    title: "A-Movie",
    poster: "test poster_path",
    releaseDate: "test release_date",
    genres: ["test genre"],
    rating: 2
  },
  {
    id: 2,
    title: "Z-Movie",
    poster: "test poster_path",
    releaseDate: "test release_date",
    genres: ["test genre"],
    rating: 4
  }
];
const mockMovieListAction: ReduxTypes.PayloadAction<MovieTypes.IMovie[]> = {
  type: searchActionTypes.getMovieListResponse,
  payload: mockedMovieList
};

const mockQuery = "test query";
const mockQueryAction: ReduxTypes.PayloadAction<string> = {
  type: searchActionTypes.getMovieList,
  payload: mockQuery
};

describe("Search page reducer...", () => {
  it("... returns store", () => {
    const store = createStore(searchPageReducer);
    const updatedStore = searchPageReducer(store.getState(), {
      type: undefined
    });

    expect(updatedStore).toEqual(store.getState());
  });

  describe("... listens for ...", () => {
    it("... queryMovies action", () => {
      const store = createStore(searchPageReducer);
      const updatedStore = searchPageReducer(store.getState(), mockQueryAction);
      store.dispatch(mockQueryAction);

      expect(store.getState()).toBeTruthy();
      expect(updatedStore.query).toEqual(mockQuery);
    });

    it("... queryMoviesResult action", () => {
      const store = createStore(searchPageReducer);

      store.dispatch(mockMovieListAction);

      expect(store.getState()).toBeTruthy();
      expect(store.getState().movies).toBeTruthy();
      expect(store.getState().movies[0]).toEqual(mockedMovieList[0]);
    });

    it("... movie sorting action - no movies", () => {
      const store = createStore(searchPageReducer);
      const mockSortingAction: ReduxTypes.PayloadAction<string> = {
        type: searchActionTypes.movieListSorting,
        payload: "test sorting key"
      };

      store.dispatch(mockSortingAction);

      expect(store.getState().sortBy).toEqual("test sorting key");
    });

    it("... movie sorting by parameter action ", () => {
      const store = createStore(searchPageReducer);
      const mockSortingAction: ReduxTypes.PayloadAction<string> = {
        type: searchActionTypes.movieListSorting,
        payload: "title"
      };

      store.dispatch(mockMovieListAction);
      store.dispatch(mockSortingAction);

      expect(store.getState()).toBeTruthy();
      expect(store.getState().movies).toBeTruthy();
      expect(store.getState().movies[0].title).toEqual("A-Movie");
      expect(store.getState().movies[1].title).toEqual("Z-Movie");
    });
  });
});
