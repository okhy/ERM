import { createStore } from "redux";
import { ActionType } from "Types";
import searchPageReducer from "./SearchPage.reducer";
import searchActionTypes from "./SearchPage.actions";

const store = createStore(searchPageReducer);

describe("Search page reducer...", () => {
  describe("... listens for ...", () => {
    it("... queryMovies action", () => {
      const action: ActionType = {
        type: searchActionTypes.getMovieList,
        payload: "test query"
      };

      store.dispatch(action);

      expect(store.getState()).toBeTruthy();
      expect(store.getState().query).toEqual("test query");
    });
    it("... queryMoviesResult action", () => {
      const mockedMovie = {
        id: 1,
        title: "test title",
        poster: "test poster_path",
        releaseDate: "test release_date",
        genres: ["test genre"]
      };
      const action: ActionType = {
        type: searchActionTypes.getMovieListResponse,
        payload: [mockedMovie]
      };

      store.dispatch(action);

      expect(store.getState()).toBeTruthy();
      expect(store.getState().movies).toBeTruthy();
      expect(store.getState().movies[0]).toEqual(mockedMovie);
    });
    // it.todo("... queryMoviesError action");
    // it.todo("... movie sorting action");
  });
});
