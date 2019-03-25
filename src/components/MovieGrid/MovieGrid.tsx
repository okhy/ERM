import * as React from "react";
// components
import MovieGridItem from "./components/MovieGridItem/MovieGridItem";

const MovieGrid = () => (
  <div className="main">
    <div className="results">
      <span className="count">7 movies found</span>
      <div className="sorting">
        <span>Sort by</span>
        <button>release date</button>
        <button>rating</button>
      </div>
    </div>
    <div className="grid">
      <MovieGridItem />
      <MovieGridItem />
      <MovieGridItem />
      <MovieGridItem />
      <MovieGridItem />
      <MovieGridItem />
      <MovieGridItem />
    </div>
  </div>
);

export default MovieGrid;
