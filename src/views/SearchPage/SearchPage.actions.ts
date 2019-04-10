import { MovieListQuery, IMovie } from "Types";
import movieService from "Services/movieService";
import { toggleFetchStatus } from "Root/global.actions";

const searchActionTypes = {
  getMovieList: "GET_MOVIE_LIST_QUERY",
  getMovieListResponse: "GET_MOVIE_LIST_RESPONSE",
  getMovieListError: "GET_MOVIE_LIST_ERROR",
  getMovieDetails: "GET_MOVIE_DETAILS_QUERY",
  getMovieDetailsResponse: "GET_MOVIE_DETAILS_RESPONSE",
  getMovieDetailsError: "GET_MOVIE_DETAILS_ERROR",
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
      : searchActionTypes.getMovieListError,
    payload: result
  });
};

// thunk action
export const movieSearch = (query: MovieListQuery) => (dispatch: any) => {
  dispatch(toggleFetchStatus(true));
  getMovie(dispatch, query);

  return {
    type: searchActionTypes.getMovieList,
    payload: query
  };
};
