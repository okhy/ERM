import { MovieTypes, ReduxTypes } from "Types";
import movieService from "Services/movieService";

import { toggleFetchStatus, fetchError } from "App/global.actions";

enum searchActionTypes {
  getMovieList = "GET_MOVIE_LIST_QUERY",
  getMovieListResponse = "GET_MOVIE_LIST_RESPONSE",
  movieListSorting = "MOVIE_LIST_SORT"
}

export default searchActionTypes;

// thunk action
export const movieSearch: ReduxTypes.ThunkAction<
  MovieTypes.MovieListQuery,
  boolean | MovieTypes.IMovie[] | Error
> = query => dispatch => {
  dispatch(toggleFetchStatus(true));
  /* istanbul ignore next: covered by service tests*/
  const errorHandler = (error: Error) => {
    dispatch(fetchError(error));
    dispatch(toggleFetchStatus(false));
  };
  const successHandler = (result: MovieTypes.IMovie[]) => {
    dispatch({
      type: searchActionTypes.getMovieListResponse,
      payload: result
    });
    dispatch(toggleFetchStatus(false));
  };

  movieService.getMovieList(query, errorHandler, successHandler);

  return {
    type: searchActionTypes.getMovieList,
    payload: query
  };
};
