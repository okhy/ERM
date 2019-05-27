declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    __PRELOADED_STATE__: any;
  }
}

export interface ResponseMovie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  overview: string;
  runtime: number | null;
  genres: string[];
  tagline?: string;
  revenue?: number;
  budget?: number;
  vote_count?: number;
}

export interface ResponseMovieList {
  data: ResponseMovie[];
  total: number;
  offset: number;
  limit: number;
}

declare module StateTypes {
  export interface globalState {
    fetching: {
      status: boolean;
      error: false | Error;
    };
  }

  export interface searchPageState {
    query: string;
    movies: MovieTypes.IMovie[];
    sortBy: string;
  }
  export interface detailsPageState {
    details: false | MovieTypes.IMovie;
    similarMovies: MovieTypes.IMovie[];
  }

  export interface applicationState {
    global: globalState;
    searchPage: searchPageState;
    detailsPage: detailsPageState;
  }
}

declare module MovieTypes {
  export interface MovieListQuery {
    search: string;
    searchBy?: "title" | "genres";
    sortBy?: string;
    sortOrder?: "desc" | "asc";
    filter?: string[];
    offset?: number;
    limit?: number;
  }

  export interface IMovie {
    id: number;
    rating: number;
    title: string;
    poster?: string;
    releaseDate?: string;
    genres?: string[];
    runtime?: number;
    overview?: string;
  }
}

declare module ReduxTypes {
  export interface GenericAction<T> {
    type: string;
    payload?: T;
  }

  export interface PayloadAction<T> extends GenericAction<T> {
    payload: T;
  }

  export interface ActionCreator<T> {
    (payload: T): GenericAction<T>;
  }

  export interface PayloadActionCreator<T> {
    (payload: T): PayloadAction<T>;
  }

  export interface StoreDispatch<T> {
    (action: GenericAction<T> | ActionCreator<T>): void;
  }

  export type ThunkAction<T, D> = (
    payload: T
  ) => (dispatch: StoreDispatch<D>) => GenericAction<T>;
}

// to experiment:

// type Partial<T> = { [P in keyof T]?: T[P] };

// type payload<T> = {
//   payload: T;
// };
// interface PayloadAction extends payload<string | number> {
//   type: string;
// }

// interface GenericAction extends Partial<payload<usecases>> {
//   type: string;
// }

// export interface ThunkDispatch<T> {
//   (dispatch: StoreDispatch<T>): GenericAction<T>;
// }

// export interface ThunkAction<T, D> extends ActionCreator<T> {
//   (payload: T): ThunkDispatch<D>;
// }
