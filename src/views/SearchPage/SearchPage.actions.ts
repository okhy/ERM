const searchActionTypes = {
  getMovieList: "GET_MOVIE_LIST_QUERY",
  getMovieListResponse: "GET_MOVIE_LIST_RESPONSE",
  getMovieListError: "GET_MOVIE_LIST_ERROR",
  getMovieDetails: "GET_MOVIE_DETAILS_QUERY",
  getMovieDetailsResponse: "GET_MOVIE_DETAILS_RESPONSE",
  getMovieDetailsError: "GET_MOVIE_DETAILS_ERROR"
};

export default searchActionTypes;

export const searchForMovie = (query: string) => ({
  type: searchActionTypes.getMovieList,
  payload: query
});

export const getMovieDetails = (id: number) => ({
  type: searchActionTypes,
  payload: id
});
