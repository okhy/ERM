import { movieListQuery } from "../../types";
import movieService from "./../../services/movieService";
import { IMovies } from "./../../../__mocks__/moviesMocks";
import { toggleFetchStatus } from "./../../global.actions";

const searchActionTypes = {
  getMovieList: "GET_MOVIE_LIST_QUERY",
  getMovieListResponse: "GET_MOVIE_LIST_RESPONSE",
  getMovieListError: "GET_MOVIE_LIST_ERROR",
  getMovieDetails: "GET_MOVIE_DETAILS_QUERY",
  getMovieDetailsResponse: "GET_MOVIE_DETAILS_RESPONSE",
  getMovieDetailsError: "GET_MOVIE_DETAILS_ERROR"
};

export default searchActionTypes;

// helperFunction
export const getMovie = async (dispatch: any, query: movieListQuery) => {
  const result: IMovies = await movieService.getMovies(query);

  dispatch(toggleFetchStatus(false));
  dispatch({
    type: searchActionTypes.getMovieListResponse,
    payload: result.data
  });
};

// thunk action
export const movieSearch = (query: movieListQuery) => (dispatch: any) => {
  dispatch(toggleFetchStatus(true));
  getMovie(dispatch, query);

  return {
    type: searchActionTypes.getMovieList,
    payload: query
  };
};
