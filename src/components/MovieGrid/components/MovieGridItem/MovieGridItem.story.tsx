import * as React from "react";
import { storiesOf } from "@storybook/react";
import MovieGridItem, { IMovieGridItem } from "./MovieGridItem";
// mock data
const singleMovie: IMovieGridItem = {
  id: 1,
  title: "Pulp Fiction",
  poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  releaseDate: "1994-09-10",
  genres: ["Thriller", "Crime"]
};

const centerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "100px"
};

storiesOf("Components / MovieGrid / MovieGridItem", module)
  .add("default", () => (
    <div style={centerStyles}>
      <MovieGridItem {...singleMovie} />
    </div>
  ))
  .add("no poster", () => (
    <div style={centerStyles}>
      <MovieGridItem {...singleMovie} poster="" />
    </div>
  ));
