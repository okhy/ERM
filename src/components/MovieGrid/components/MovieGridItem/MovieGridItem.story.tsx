import * as React from "react";
import { storiesOf } from "@storybook/react";
import MovieGridItem from "./MovieGridItem";
import { MovieTypes } from "Types";

// mock data
const singleMovie: MovieTypes.IMovie = {
  id: 1,
  title: "Pulp Fiction",
  poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  releaseDate: "1994-09-10",
  genres: ["Thriller", "Crime"],
  rating: 9
};

const centerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "100px"
};

storiesOf("Components / MovieGrid / MovieGridItem", module)
  .add(
    "default",
    (): any => (
      <div style={centerStyles}>
        <MovieGridItem {...singleMovie} />
      </div>
    )
  )
  .add(
    "no poster",
    (): any => (
      <div style={centerStyles}>
        <MovieGridItem {...singleMovie} poster="" />
      </div>
    )
  )
  .add(
    "missing data",
    (): any => (
      <div style={centerStyles}>
        <MovieGridItem
          {...singleMovie}
          poster={undefined}
          title=""
          genres={undefined}
          releaseDate=""
        />
      </div>
    )
  );
