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
  getMovie?: (id: number) => MovieTypes.IMovie;
  sortingAction?: () => void;
};

const MovieGrid: React.SFC<MoviesGridType> = props => {
  const movieCount: number = !!props.movieIDs ? props.movieIDs.length : 0;
  const movieList: void[] | React.ReactElement[] =
    props.movieIDs &&
    props.movieIDs.map((movieID: number) => {
      const movie = props.getMovie(movieID);
      return <MovieGridItem key={movie.id} {...movie} />;
    });

  const countMessage: string = `${movieCount || "No"} movie${
    movieCount === 1 ? "" : "s"
  } found`;

  return (
    <div className={styles.main}>
      <div className={styles.results}>
        {props.similarResults ? (
          <>
            <span>Films by </span>
            <span>Drama genre</span>
          </>
        ) : (
          <>
            <span className={styles.count}>{countMessage}</span>
            <div className={styles.sorting}>
              <span className={styles.sortingLabel}>Sort by</span>
              <Button label="release date" size="small" variant="white" />
              <Button label="rating" size="small" variant="white" />
            </div>
          </>
        )}
      </div>
      {!!props.movieIDs && !!props.movieIDs.length ? (
        <div className={styles.grid}>{movieList}</div>
      ) : (
        <div className={styles.sorryMessage}>
          <span>No movies :(</span>
        </div>
      )}
    </div>
  );
};

const mapState = (state: StateTypes.ApplicationState) => ({
  getMovie: (id: number) =>
    state.searchPage.movies.find((movie: MovieTypes.IMovie) => movie.id === id)
});

const mapDispatch = (dispatch: Dispatch) => ({
  sortMovies: (sortKey: string) => {
    dispatch({ type: searchActionTypes.movieListSorting, payload: sortKey });
  }
});
export default connect(
  mapState,
  mapDispatch
)(MovieGrid);
