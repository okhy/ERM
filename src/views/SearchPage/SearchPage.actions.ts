import {
  MovieListQuery,
  IMovie,
  ActionTypeMap,
  ThunkAction
  // StoreDispatch,
  // PayloadAction
} from "Types";
import movieService from "Services/movieService";
import globalActionTypes, { toggleFetchStatus } from "Root/global.actions";

const searchActionTypes: ActionTypeMap = {
  getMovieList: "GET_MOVIE_LIST_QUERY",
  getMovieListResponse: "GET_MOVIE_LIST_RESPONSE",
  getMovieListError: "GET_MOVIE_LIST_ERROR",
  // getMovieDetails: "GET_MOVIE_DETAILS_QUERY",
  // getMovieDetailsResponse: "GET_MOVIE_DETAILS_RESPONSE",
  // getMovieDetailsError: "GET_MOVIE_DETAILS_ERROR",
  movieListSorting: "MOVIE_LIST_SORT"
};

export default searchActionTypes;

// helperFunction dispatching response actions
export const getMovie = async (dispatch: any, query: MovieListQuery) => {
  const result: Error | IMovie[] = await movieService.getMovies(query);

  dispatch(toggleFetchStatus(false));
  dispatch({
    type: Array.isArray(result)
      ? searchActionTypes.getMovieListResponse
      : globalActionTypes.fetchError,
    payload: result
  });
};

// thunk action
export const movieSearch: ThunkAction<
  MovieListQuery,
  boolean
> = query => dispatch => {
  dispatch(toggleFetchStatus(true));
  getMovie(dispatch, query);

  return {
    type: searchActionTypes.getMovieList,
    payload: query
  };
};
