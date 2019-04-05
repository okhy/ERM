import * as React from "react";
import { storiesOf } from "@storybook/react";
// component / interface
import MovieGrid, { IMovie } from "./MovieGrid";

const movieList: IMovie[] = [
  {
    id: 1,
    title: "Pulp Fiction",
    poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    releaseDate: "1994-09-10",
    genres: ["Thriller", "Crime"]
  },
  {
    id: 2,
    title: "No poster prop",
    releaseDate: "2019-09-10",
    genres: ["Crime"]
  },
  {
    id: 3,
    title: "Empty poster string",
    poster: "",
    releaseDate: "1994-09-10",
    genres: ["Thriller", "Crime"]
  },
  {
    id: 4,
    title: "Wrong date format",
    releaseDate: "19"
  }
];

storiesOf("Components / MovieGrid", module)
  .add("default", () => <MovieGrid movies={movieList} />)
  .add("no movies", () => <MovieGrid />);
