import { MovieListQuery, IMovie, ThunkAction } from "Types";
import movieService from "Services/movieService";

import { toggleFetchStatus, fetchError } from "Root/global.actions";

enum searchActionTypes {
  getMovieList = "GET_MOVIE_LIST_QUERY",
  getMovieListResponse = "GET_MOVIE_LIST_RESPONSE",
  movieListSorting = "MOVIE_LIST_SORT"
}

export default searchActionTypes;

// thunk action
export const movieSearch: ThunkAction<
  MovieListQuery,
  boolean | IMovie[] | Error
> = query => dispatch => {
  dispatch(toggleFetchStatus(true));
  const errorHandler = (error: Error) => {
    /* istanbul ignore next: covered by service tests*/
    dispatch(fetchError(error));
    /* istanbul ignore next: covered by service tests*/
    dispatch(toggleFetchStatus(false));
  };
  const successHandler = (result: IMovie[]) => {
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
