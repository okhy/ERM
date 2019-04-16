import { ReduxTypes, MovieTypes, StateTypes } from "Types";
import searchActionTypes from "./SearchPage.actions";

type searchPageReducerType = (
  state: StateTypes.searchPageState,
  action: ReduxTypes.GenericAction<any>
) => StateTypes.searchPageState;

const initialState: StateTypes.searchPageState = {
  query: "",
  movies: [],
  sort: "desc"
};

const searchPageReducer: searchPageReducerType = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case searchActionTypes.getMovieList:
      return {
        ...state,
        query: action.payload
      };
    case searchActionTypes.getMovieListResponse:
      return {
        ...state,
        movies: action.payload
      };
    case searchActionTypes.movieListSorting:
      if (state.movies.length) {
        const newMovies: MovieTypes.IMovie[] = state.movies;
        newMovies.sort();
        if (action.payload === "desc") {
          newMovies.reverse();
        }

        return { ...state, movies: newMovies, sort: action.payload };
      }
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export default searchPageReducer;
