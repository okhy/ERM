import { createStore } from "redux";
import { IMovie, PayloadAction } from "Types";
import searchPageReducer from "./SearchPage.reducer";
import searchActionTypes from "./SearchPage.actions";

const store = createStore(searchPageReducer);

describe("Search page reducer...", () => {
  describe("... listens for ...", () => {
    it("... queryMovies action", () => {
      const action: PayloadAction<string> = {
        type: searchActionTypes.getMovieList,
        payload: "test query"
      };

      store.dispatch(action);

      expect(store.getState()).toBeTruthy();
      expect(store.getState().query).toEqual("test query");
    });
    it("... queryMoviesResult action", () => {
      const mockedMovieList: IMovie[] = [
        {
          id: 1,
          title: "test title",
          poster: "test poster_path",
          releaseDate: "test release_date",
          genres: ["test genre"]
        }
      ];
      const action: PayloadAction<IMovie[]> = {
        type: searchActionTypes.getMovieListResponse,
        payload: mockedMovieList
      };

      store.dispatch(action);

      expect(store.getState()).toBeTruthy();
      expect(store.getState().movies).toBeTruthy();
      expect(store.getState().movies[0]).toEqual(mockedMovieList[0]);
    });
    // it.todo("... queryMoviesError action");
    // it.todo("... movie sorting action");
  });
});
