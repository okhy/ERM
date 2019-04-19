import * as React from "react";
// components and interfaces
import MovieGridItem from "./components/MovieGridItem/MovieGridItem";
import Button from "Components/Button/Button";
// styles
import * as styles from "./MovieGrid.styles.css";
// interface
import { MovieTypes } from "Types";
// redux
import { connect } from "react-redux";
import { StateTypes } from "Types";
import { Dispatch } from "redux";
import searchActionTypes from "Views/SearchPage/SearchPage.actions";

type MoviesGridType = {
  similarResults?: boolean;
  movieIDs?: number[];
  // store variables
  getMovie: (id: number) => MovieTypes.IMovie;
  sortMovies: (sortKey: string) => void;
  sortBy: string;
};

const MovieGrid: React.SFC<MoviesGridType> = ({
  similarResults,
  movieIDs,
  getMovie,
  sortMovies,
  sortBy
}) => {
  const movieCount: number = !!movieIDs ? movieIDs.length : 0;
  const movieList: void[] | React.ReactElement[] =
    movieIDs &&
    movieIDs.map((movieID: number) => {
      const movie = getMovie(movieID);
      return <MovieGridItem key={movie.id} {...movie} />;
    });

  const countMessage: string = `${movieCount || "No"} movie${
    movieCount === 1 ? "" : "s"
  } found`;

  const handleSortClick = (sortKey: string) => (e: React.MouseEvent): void => {
    e.preventDefault();
    sortMovies(sortKey);
  };
  return (
    <div className={styles.main}>
      <div className={styles.results}>
        {similarResults ? (
          <>
            <span>Films by </span>
            <span>Drama genre</span>
          </>
        ) : (
          <>
            <span className={styles.count}>{countMessage}</span>
            <div className={styles.sorting}>
              <span className={styles.sortingLabel}>Sort by</span>
              <Button
                label="release date"
                size="small"
                variant={sortBy === "releaseDate" ? "primary" : "white"}
                clickAction={handleSortClick("releaseDate")}
              />
              <Button
                label="rating"
                size="small"
                variant={sortBy === "rating" ? "primary" : "white"}
                clickAction={handleSortClick("rating")}
              />
            </div>
          </>
        )}
      </div>
      {!!movieIDs && !!movieIDs.length ? (
        <div className={styles.grid}>{movieList}</div>
      ) : (
        <div className={styles.sorryMessage}>
          <span>No movies :(</span>
        </div>
      )}
    </div>
  );
};

/* istanbul ignore next*/
const mapState = (state: StateTypes.ApplicationState) => ({
  sortBy: state.searchPage.sortBy,
  getMovie: (id: number) =>
    state.searchPage.movies.find((movie: MovieTypes.IMovie) => movie.id === id)
});
/* istanbul ignore next*/
const mapDispatch = (dispatch: Dispatch) => ({
  sortMovies: (sortKey: string) => {
    dispatch({ type: searchActionTypes.movieListSorting, payload: sortKey });
  }
});

export default connect(
  mapState,
  mapDispatch
)(MovieGrid);

export { MovieGrid };
