import * as React from "react";
// components
import MovieGridItem from "./components/MovieGridItem/MovieGridItem";
// interface
interface IMoviesGird {
  similarResults: false;
  movies?: any[];
}

const MovieGrid = (props: IMoviesGird) => (
  <div className="main">
    {props.similarResults ? (
      <div>
        <span>Films by </span>
        <span>Drama genre</span>
      </div>
    ) : (
      <div className="results">
        <span className="count">7 movies found</span>
        <div className="sorting">
          <span>Sort by</span>
          <button>release date</button>
          <button>rating</button>
        </div>
      </div>
    )}
    {props.movies ? (
      <div className="grid">
        <MovieGridItem />
        <MovieGridItem />
        <MovieGridItem />
        <MovieGridItem />
        <MovieGridItem />
        <MovieGridItem />
        <MovieGridItem />
      </div>
    ) : (
      <div>
        <span>No movies :(</span>
      </div>
    )}
  </div>
);

export default MovieGrid;
