import { ActionType, IMovie } from "Types";
import searchActionTypes from "./SearchPage.actions";

type SearchPageReducerState = {
  query: false | string;
  movies: false | IMovie[];
  sort: false | "desc" | "asc";
};

const initialState: SearchPageReducerState = {
  query: false,
  movies: false,
  sort: false
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

        return { ...state, movies: newMovies, sort: action.payload };
      }
      return { ...state, sorting: action.payload };
    default:
      return state;
  }
};

export default searchPageReducer;
