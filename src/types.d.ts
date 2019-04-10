declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export interface ActionType {
  type: string;
  payload?: Object;
}
export interface MovieListQuery {
  search: string;
  sortBy?: string;
  sortOrder?: "desc" | "asc";
  searchBy?: "title" | "genres";
  filter?: string[];
  offset?: number;
  limit?: number;
}

export interface ResponseMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number | null;
}

export interface ResponseMovieList {
  data: ResponseMovie[];
  total: number;
  offset: number;
  limit: number;
}
export interface IMovieGridItem {
  title: string;
  poster?: string;
  releaseDate?: string;
  genres?: string[];
}

export interface IMovie extends IMovieGridItem {
  id: number;
}
