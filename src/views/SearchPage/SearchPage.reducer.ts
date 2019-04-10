import { ActionType, IMovie } from "Types";
import searchActionTypes from "./SearchPage.actions";

type SearchPageReducerState = {
  readonly query: false | string;
  readonly movies: false | IMovie[];
};

const initialState: SearchPageReducerState = {
  query: false,
  movies: false
};

const searchPageReducer = (state = initialState, action: ActionType) => {
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
      if (state.movies) {
        const newMovies: IMovie[] = state.movies && state.movies;

        newMovies.sort((a: IMovie, b: IMovie) => {
          if (action.payload === "desc") {
            return a.title <= b.title ? 1 : -1;
          }
          return a.title >= b.title ? 1 : -1;
        });

        return { ...state, movies: newMovies, sorting: action.payload };
      }
      return { ...state, sorting: action.payload };
    case searchActionTypes.getMovieListError:
    default:
      return state;
  }
};

export default searchPageReducer;
