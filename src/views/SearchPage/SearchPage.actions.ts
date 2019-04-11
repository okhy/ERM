import { MovieListQuery, IMovie, ThunkAction, StoreDispatch } from "Types";
import movieService from "Services/movieService";
import globalActionTypes, { toggleFetchStatus } from "Root/global.actions";

const enum searchActionTypes {
  getMovieList = "GET_MOVIE_LIST_QUERY",
  getMovieListResponse = "GET_MOVIE_LIST_RESPONSE",
  movieListSorting = "MOVIE_LIST_SORT"
}

export default searchActionTypes;

// helperFunction dispatching response globalActionTypes
export const getMovieList = async (
  dispatch: StoreDispatch<Error | IMovie[] | boolean>,
  query: MovieListQuery
) => {
  await movieService
    .getMovieList(query)
    .then((result: IMovie[]) => {
      dispatch({
        type: searchActionTypes.getMovieListResponse,
        payload: result
      });
    })
    .catch((error: Error) => {
      dispatch({
        type: globalActionTypes.fetchError,
        payload: error
      });
    });

  dispatch(toggleFetchStatus(false));
};

// thunk action
export const movieSearch: ThunkAction<
  MovieListQuery,
  boolean
> = query => dispatch => {
  dispatch(toggleFetchStatus(true));
  getMovieList(dispatch, query);

  return {
    type: searchActionTypes.getMovieList,
    payload: query
  };
};
