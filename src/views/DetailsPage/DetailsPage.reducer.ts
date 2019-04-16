import { IMovie, GenericAction } from "Types";
import { IMovieDetails } from "./components/MovieDetails/MovieDetails";

import detailsActionTypes from "./DetailsPage.actions";

interface DetailsPageReducerState {
  details: false | IMovieDetails;
  similarMovies: false | IMovie[];
}

type detailsPageReducerType = (
  state: DetailsPageReducerState,
  action: GenericAction<any>
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
