import { ReduxTypes, MovieTypes, StateTypes } from "Types";
import searchActionTypes from "./SearchPage.actions";

type searchPageReducerType = (
  state: StateTypes.searchPageState,
  action: ReduxTypes.GenericAction<any>
) => StateTypes.searchPageState;

const initialState: StateTypes.searchPageState = {
  query: "",
  movies: [],
  sortBy: "title"
};

const searchPageReducer: searchPageReducerType = (
  state = initialState,
  action
): StateTypes.searchPageState => {
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
      if (
        state.movies.length &&
        Object.keys(state.movies[0]).find(
          (value: string): boolean => value === action.payload
        )
      ) {
        const newMovies: MovieTypes.IMovie[] = state.movies;
        newMovies.sort(
          (a: MovieTypes.IMovie, b: MovieTypes.IMovie): number => {
            if (typeof a[action.payload] === "string") {
              return a[action.payload].localeCompare(b[action.payload]);
            }
            return a[action.payload] - b[action.payload];
          }
        );
        return { ...state, movies: newMovies, sortBy: action.payload };
      }
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export default searchPageReducer;
