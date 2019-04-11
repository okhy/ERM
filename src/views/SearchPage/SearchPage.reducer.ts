import { GenericAction, IMovie } from "Types";
import searchActionTypes from "./SearchPage.actions";

interface SearchPageReducerState {
  query: false | string;
  movies: false | IMovie[];
  sort: false | "desc" | "asc";
}

type searchPageReducerType = (
  state: SearchPageReducerState,
  action: GenericAction<any>
) => SearchPageReducerState;

const initialState: SearchPageReducerState = {
  query: false,
  movies: false,
  sort: false
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
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export default searchPageReducer;
