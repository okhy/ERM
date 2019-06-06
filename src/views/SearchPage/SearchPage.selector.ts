import { createSelector } from "reselect";
import { ReduxTypes, StateTypes, MovieTypes } from "App/types";


const getMovies = (state: StateTypes.applicationState): MovieTypes.IMovie[] => state.searchPage.movies
const getSortBy = (state: StateTypes.applicationState): string => state.searchPage.sortBy

type sortMoviesType = (movies: MovieTypes.IMovie[], sortBy: string) => MovieTypes.IMovie[]
const sortMovies: sortMoviesType = (movies, sortBy) => {
  const movieHasSortByKey = !!Object.keys(movies[0]).find(
    (value: string): boolean => value === sortBy
  )
  if (
    !!sortBy && !!movies.length && movieHasSortByKey
  ) {
    return movies.sort(
      (a: MovieTypes.IMovie, b: MovieTypes.IMovie): number => {
        if (typeof a[sortBy] === "string") {
          return a[sortBy].localeCompare(b[sortBy]);
        }
        return b[sortBy] - a[sortBy];
      }
    );
  }
  return movies
};

const sortMoviesSelector = createSelector(getMovies, getSortBy, sortMovies
)

export default sortMoviesSelector;