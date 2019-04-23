import { MovieTypes, ReduxTypes } from "Types";
import movieService from "Services/movieService";
import { toggleFetchStatus, fetchError } from "Src/global.actions";

type resultType = {
  movie: MovieTypes.IMovie;
  similar: MovieTypes.IMovie[];
};

enum detailsActionTypes {
  getMovieDetails = "GET_MOVIE_DETAILS_QUERY",
  getMovieDetailsResponse = "GET_MOVIE_DETAILS_RESPONSE"
}

export default detailsActionTypes;

export const fetchMovieById: ReduxTypes.ThunkAction<
  string,
  boolean | resultType | Error
> = id => dispatch => {
  dispatch(toggleFetchStatus(true));

  const errorHandler = (error: Error): void => {
    dispatch(fetchError(error));
    dispatch(toggleFetchStatus(false));
  };

  const successHandler = (result: MovieTypes.IMovie): void => {
    const query: MovieTypes.MovieListQuery = {
      search: result.genres ? result.genres[0] : "",
      searchBy: "genres"
    };
    const movieListsuccessHandler = (
      similarMovies: MovieTypes.IMovie[]
    ): void => {
      dispatch({
        type: detailsActionTypes.getMovieDetailsResponse,
        payload: { movie: result, similar: similarMovies }
      });
      dispatch(toggleFetchStatus(false));
    };

    movieService.getMovieList(query, errorHandler, movieListsuccessHandler);
  };

  movieService.getMovieByID(id, errorHandler, successHandler);

  return {
    type: detailsActionTypes.getMovieDetails
  };
};
