import { ThunkAction, IMovie } from "Types";
import movieService, { resultType } from "Services/movieService";
import { toggleFetchStatus, fetchError } from "Root/global.actions";

enum detailsActionTypes {
  getMovieDetails = "GET_MOVIE_DETAILS_QUERY",
  getMovieDetailsResponse = "GET_MOVIE_DETAILS_RESPONSE"
}

export default detailsActionTypes;

export const fetchMovieById: ThunkAction<
  string,
  boolean | resultType | Error
> = id => dispatch => {
  dispatch(toggleFetchStatus(true));

  const errorHandler = (error: Error): void => {
    dispatch(fetchError(error));
    dispatch(toggleFetchStatus(false));
  };

  const successHandler = (result: IMovie): void => {
    movieService.getMovieList(
      {
        search: result.genres ? result.genres[0] : "",
        searchBy: "genres"
      },
      errorHandler,
      (similarMovies: IMovie[]): void => {
        dispatch({
          type: detailsActionTypes.getMovieDetailsResponse,
          payload: { movie: result, similar: similarMovies }
        });
        dispatch(toggleFetchStatus(false));
      }
    );
  };

  movieService.getMovieByID(id, errorHandler, successHandler);

  return {
    type: detailsActionTypes.getMovieDetails
  };
};
