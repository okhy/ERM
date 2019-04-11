import { StoreDispatch, ThunkAction } from "Types";
import movieService, { resultType } from "Services/movieService";
import globalActionTypes, { toggleFetchStatus } from "Root/global.actions";

const enum detailsActionTypes {
  getMovieDetails = "GET_MOVIE_DETAILS_QUERY",
  getMovieDetailsResponse = "GET_MOVIE_DETAILS_RESPONSE"
}

export default detailsActionTypes;

type getMovieByIDType = (
  id: string,
  dispatch: StoreDispatch<Error | resultType | boolean>
) => void;

const getMovieByID: getMovieByIDType = async (id, dispatch) => {
  await movieService
    .getMovieByID(id)
    .then((result: resultType) => {
      dispatch({
        type: detailsActionTypes.getMovieDetailsResponse,
        payload: result
      });
    })
    .catch((error: Error) => {
      dispatch({
        type: globalActionTypes.fetchError,
        payload: error
      });
    });
};

export const fetchMovieById: ThunkAction<string, boolean> = id => dispatch => {
  getMovieByID(id, dispatch);
  dispatch(toggleFetchStatus(true));

  return {
    type: detailsActionTypes.getMovieDetails
  };
};
