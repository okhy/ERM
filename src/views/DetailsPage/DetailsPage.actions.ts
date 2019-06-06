import { MovieTypes, ReduxTypes } from "Types";
import movieService from "Services/movieService";
import { toggleFetchStatus, fetchError } from "App/global.actions";

type resultType = {
  movie: MovieTypes.IMovie;
  similar: MovieTypes.IMovie[];
};

type dispatchInterfaceTypes = boolean | resultType | Error;

enum detailsActionTypes {
  getMovieDetails = "GET_MOVIE_DETAILS_QUERY",
  getMovieDetailsResponse = "GET_MOVIE_DETAILS_RESPONSE"
}
export default detailsActionTypes;

export const errorHandler = (
  dispatch: ReduxTypes.StoreDispatch<dispatchInterfaceTypes>
) => (error: Error): void => {
  dispatch(fetchError(error));
  dispatch(toggleFetchStatus(false));
};

export const movieListSuccessHandler = (
  dispatch: ReduxTypes.StoreDispatch<dispatchInterfaceTypes>,
  movie: MovieTypes.IMovie
) => (similar: MovieTypes.IMovie[]): void => {
  dispatch({
    type: detailsActionTypes.getMovieDetailsResponse,
    payload: { movie, similar }
  });
  dispatch(toggleFetchStatus(false));
};

// calls functions tested elsewhere
/* istanbul ignore next*/
const successHandler = (
  dispatch: ReduxTypes.StoreDispatch<dispatchInterfaceTypes>
) => (result: MovieTypes.IMovie): void => {
  movieService
    .getMovieList({
      search: result.genres ? result.genres[0] : "",
      searchBy: "genres"
    })
    .then(movieListSuccessHandler(dispatch, result))
    .catch(errorHandler(dispatch));
};

export const fetchMovieById: ReduxTypes.ThunkAction<
  number,
  dispatchInterfaceTypes
> = id => dispatch => {
  dispatch(toggleFetchStatus(true));

  movieService
    .getMovieByID(id)
    .then(successHandler(dispatch))
    .catch(errorHandler(dispatch));

  return {
    type: detailsActionTypes.getMovieDetails
  };
};
