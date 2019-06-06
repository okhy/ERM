import { MovieTypes, ReduxTypes } from "Types";
import movieService from "Services/movieService";

import { toggleFetchStatus, fetchError } from "App/global.actions";

enum searchActionTypes {
  getMovieList = "GET_MOVIE_LIST_QUERY",
  getMovieListResponse = "GET_MOVIE_LIST_RESPONSE",
  setMovieListSorting = "SET_MOVIE_LIST_SORT"
}

export default searchActionTypes;

// thunk action
export const movieSearch: ReduxTypes.ThunkAction<
  MovieTypes.MovieListQuery,
  boolean | MovieTypes.IMovie[] | Error
> = query => dispatch => {
  dispatch(toggleFetchStatus(true));
  /* istanbul ignore next: covered by service tests*/

  movieService
    .getMovieList(query)
    .then((result: MovieTypes.IMovie[]) => {
      dispatch({
        type: searchActionTypes.getMovieListResponse,
        payload: result
      });
      dispatch(toggleFetchStatus(false));
    })
    .catch((error: Error) => {
      dispatch(fetchError(error));
      dispatch(toggleFetchStatus(false));
    });

  return {
    type: searchActionTypes.getMovieList,
    payload: query
  };
};
