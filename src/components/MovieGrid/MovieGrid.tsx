import * as React from "react";
// components
import MovieGridItem, {
  IMovieGridItem
} from "./components/MovieGridItem/MovieGridItem";
// styles
import * as styles from "./MovieGrid.styles.css";
// interface
export interface IMovie extends IMovieGridItem {
  id: number;
}
interface IMoviesGrid {
  similarResults?: boolean;
  movies?: IMovie[];
}

const MovieGrid: React.SFC<IMoviesGrid> = ({ movies, similarResults }) => {
  const movieCount: number = !!movies ? movies.length : 0;
  const movieList: React.ReactElement[] =
    movies && movies.map(movie => <MovieGridItem key={movie.id} {...movie} />);

  const countMessage: string = `${movieCount || "No"} movie${
    movieCount === 1 ? "" : "s"
  } found`;

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
            <span className="count">{countMessage}</span>
            <div className="sorting">
              <span>Sort by</span>
              <button>release date</button>
              <button>rating</button>
            </div>
          </>
        )}
      </div>
      {movies ? (
        <div className={styles.grid}>{movieList}</div>
      ) : (
        <div className={styles.sorryMessage}>
          <span>No movies :(</span>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
