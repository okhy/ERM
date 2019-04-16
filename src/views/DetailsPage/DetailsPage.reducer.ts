import { MovieTypes, ReduxTypes } from "Types";

import detailsActionTypes from "./DetailsPage.actions";

interface DetailsPageReducerState {
  details: false | MovieTypes.IMovieDetails;
  similarMovies: false | MovieTypes.IMovie[];
}

type detailsPageReducerType = (
  state: DetailsPageReducerState,
  action: ReduxTypes.GenericAction<any>
) => DetailsPageReducerState;

const initialState: DetailsPageReducerState = {
  details: false,
  similarMovies: false
};

const detailsPageReducer: detailsPageReducerType = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case detailsActionTypes.getMovieDetailsResponse:
      return {
        ...state,
        details: action.payload.movie,
        similarMovies: action.payload.similar
      };
    case detailsActionTypes.getMovieDetails:
    default:
      return state;
  }
};

export default detailsPageReducer;
