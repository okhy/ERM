import { createStore } from "redux";
import { IMovie, PayloadAction } from "Types";
import searchPageReducer from "./SearchPage.reducer";
import searchActionTypes from "./SearchPage.actions";

const mockedMovieList: IMovie[] = [
  {
    id: 1,
    title: "A-Movie",
    poster: "test poster_path",
    releaseDate: "test release_date",
    genres: ["test genre"]
  },
  {
    id: 2,
    title: "Z-movie",
    poster: "test poster_path",
    releaseDate: "test release_date",
    genres: ["test genre"]
  }
];
const mockMovieListAction: PayloadAction<IMovie[]> = {
  type: searchActionTypes.getMovieListResponse,
  payload: mockedMovieList
};

const mockQuery = "test query";
const mockQueryAction: PayloadAction<string> = {
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
    it("... movie sorting action (ascending)", () => {
      const store = createStore(searchPageReducer);

      const mockSortingAction: PayloadAction<"asc"> = {
        type: searchActionTypes.movieListSorting,
        payload: "asc"
      };
      store.dispatch(mockMovieListAction);
      store.dispatch(mockSortingAction);

      expect(store.getState()).toBeTruthy();
      expect(store.getState().movies).toBeTruthy();
      expect(store.getState().sort).toEqual("asc");
      expect(store.getState().movies).toEqual(mockedMovieList);
    });
    it("... movie sorting action (descending)", () => {
      const store = createStore(searchPageReducer);

      const mockSortingAction: PayloadAction<"desc"> = {
        type: searchActionTypes.movieListSorting,
        payload: "desc"
      };
      const mockedMovieListReversed = mockedMovieList;
      mockedMovieListReversed.sort((a: IMovie, b: IMovie) =>
        a.title <= b.title ? 1 : -1
      );

      store.dispatch(mockMovieListAction);
      store.dispatch(mockSortingAction);

      expect(store.getState()).toBeTruthy();
      expect(store.getState().movies).toBeTruthy();
      expect(store.getState().sort).toEqual("desc");
      expect(store.getState().movies).toEqual(mockedMovieListReversed);
    });
    it("... movie sorting action (no movies)", () => {
      const store = createStore(searchPageReducer);

      const mockSortingAction: PayloadAction<"asc"> = {
        type: searchActionTypes.movieListSorting,
        payload: "asc"
      };
      store.dispatch(mockSortingAction);

      expect(store.getState()).toBeTruthy();
      expect(store.getState().movies).toBeTruthy();
      expect(store.getState().sort).toEqual("asc");
      expect(store.getState().movies).toEqual([]);
    });
  });
});
