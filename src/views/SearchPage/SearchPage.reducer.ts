import { ReduxTypes, StateTypes } from "Types";
import searchActionTypes from "./SearchPage.actions";

type searchPageReducerType = (
  state: StateTypes.searchPageState,
  action: ReduxTypes.GenericAction<any>
) => StateTypes.searchPageState;

const initialState: StateTypes.searchPageState = {
  query: "",
  movies: [],
  sortBy: "title"
};

const searchPageReducer: searchPageReducerType = (
  state = initialState,
  action
): StateTypes.searchPageState => {
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
    case searchActionTypes.setMovieListSorting:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export default searchPageReducer;
