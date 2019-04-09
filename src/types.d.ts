export type ActionType = {
  type: string;
  payload?: Object;
};

export type movieListQuery = {
  search: string;
  sortBy?: string;
  sortOrder?: "desc" | "asc";
  searchBy?: "title" | "genres";
  filter?: string[];
  offset?: number;
  limit?: number;
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
