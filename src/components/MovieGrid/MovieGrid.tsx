import * as React from "react";
// components and interfaces
import MovieGridItem from "./components/MovieGridItem/MovieGridItem";
import Button from "Components/Button/Button";
// styles
import * as styles from "./MovieGrid.styles.css";
// interface
import { IMovie } from "Types";
// redux
import { connect } from "react-redux";
import { StateType } from "Root/types";

type MoviesGridType = {
  similarResults?: boolean;
  movieIDs?: number[];
  getMovie?: (id: number) => IMovie;
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

const mapStateToProps = (state: StateType.ApplicationState) => ({
  getMovie: (id: number) =>
    state.searchPage.movies.find((movie: IMovie) => movie.id === id)
});

export default connect(mapStateToProps)(MovieGrid);
