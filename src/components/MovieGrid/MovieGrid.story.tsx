import * as React from "react";
import { storiesOf } from "@storybook/react";
// component / interface
import MovieGrid from "./MovieGrid";

const movieList = [1, 2, 3, 4, 5, 6];

storiesOf("Components / MovieGrid", module)
  .add("default", () => <MovieGrid movieIDs={movieList} />)
  .add("no movies", () => <MovieGrid />);
