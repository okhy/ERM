import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DetailsPage } from "./DetailsPage";
import { MovieTypes } from "Types";

const mockMovie: MovieTypes.IMovie = {
  id: 1,
  title: "Pulp Fiction",
  poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  releaseDate: "1994-09-10",
  genres: ["Thriller", "Crime"],
  rating: 8
};

const mockMatch = { params: { id: "1" } };

storiesOf("Views / DetailsPage", module).add("default", () => (
  <DetailsPage
    match={mockMatch}
    detailsID={1}
    getDetails={jest.fn(() => mockMovie)}
    similarMovies={[1, 2, 3, 4]}
    fetchMovie={jest.fn()}
  />
));
