import { ReduxTypes, StateTypes } from "Types";

import detailsActionTypes from "./DetailsPage.actions";

type detailsPageReducerType = (
  state: StateTypes.detailsPageState,
  action: ReduxTypes.GenericAction<any>
) => StateTypes.detailsPageState;

const initialState: StateTypes.detailsPageState = {
  details: false,
  similarMovies: []
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
