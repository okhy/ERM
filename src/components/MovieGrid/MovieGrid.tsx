import * as React from "react";
// components
import MovieGridItem from "./components/MovieGridItem/MovieGridItem";
// styles
import * as styles from "./MovieGrid.styles.css";
// interface
interface IMoviesGird {
  similarResults?: boolean;
  movies?: any[];
}

const MovieGrid = (props: IMoviesGird) => (
  <div className={styles.main}>
    <div className={styles.results}>
      {props.similarResults ? (
        <>
          <span>Films by </span>
          <span>Drama genre</span>
        </>
      ) : (
        <>
          <span className="count">7 movies found</span>
          <div className="sorting">
            <span>Sort by</span>
            <button>release date</button>
            <button>rating</button>
          </div>
        </>
      )}
    </div>
    {props.movies ? (
      <div className={styles.grid}>
        <MovieGridItem />
        <MovieGridItem />
        <MovieGridItem />
        <MovieGridItem />
        <MovieGridItem />
        <MovieGridItem />
        <MovieGridItem />
      </div>
    ) : (
      <div className={styles.sorryMessage}>
        <span>No movies :(</span>
      </div>
    )}
  </div>
);

export default MovieGrid;
