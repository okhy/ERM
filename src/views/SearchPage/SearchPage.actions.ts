import { movieListQuery } from "../../types";
// import movieService from "./../services/movieService";
import { movieList } from "./../../../__mocks__/moviesMocks";
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

export const getMovie = (query: movieListQuery) => (dispatch: any) => {
  dispatch(toggleFetchStatus(false));
  return {
    type: searchActionTypes.getMovieListResponse,
    payload: movieList.data
  };
};

// thunk
export const movieSearch = (query: movieListQuery) => (dispatch: any) => {
  dispatch(toggleFetchStatus(true));
  setTimeout(() => {
    dispatch(getMovie(query)(dispatch));
  }, 2000);
  return {
    type: searchActionTypes.getMovieList,
    payload: query
  };
};
