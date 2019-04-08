import { ActionType } from "AppRoot/types";
import searchActionTypes from "./SearchPage.actions";
import { IMovie } from "Components/MovieGrid/MovieGrid";

type SearchPageReducerState = {
  readonly query: false | string;
  readonly movies: false | IMovie[];
};

const initialState: SearchPageReducerState = {
  query: false,
  movies: false
};

const searchPageReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case searchActionTypes.getMovieList:
      return {
        ...state,
        query: action.payload
      };
    case searchActionTypes.getMovieListResponse:
      return {
        ...state,
        movies: action.payload
      };
    case searchActionTypes.getMovieListError:
    default:
      return state;
  }
};

export default searchPageReducer;
