import * as React from "react";
import { shallow } from "enzyme";
import { MovieTypes } from "Types";
// components
import MovieDetails from "./MovieDetails";
import Poster from "Components/Poster/Poster";
// styles
import * as styles from "./MovieDetails.styles.css";

const mockMovie: MovieTypes.IMovie = {
  id: 1,
  title: "Pulp Fiction",
  poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  releaseDate: "1994-09-10",
  genres: ["Thriller", "Crime"],
  rating: 8,
  overview:
    "A burger- loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
  runtime: 154
};

describe("MovieDetails component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(
      <MovieDetails id={1} rating={8} title="" overview="" />
    );
    expect(wrapper.find(MovieDetails)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(
      <MovieDetails id={1} rating={8} title="" overview="" />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("... aplies required styles", () => {
    const wrapper = shallow(
      <MovieDetails id={1} rating={8} title="" overview="" />
    );

    expect(wrapper.find(`.${styles.main}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.details}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.title}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.overview}`)).toBeTruthy();
  });
  it("... renders passed props", () => {
    const wrapper = shallow(<MovieDetails {...mockMovie} />);

    expect(wrapper.find(Poster)).toBeTruthy();
    expect(wrapper.contains(mockMovie.title)).toBeTruthy();
    expect(wrapper.contains(mockMovie.releaseDate.substr(0, 4))).toBeTruthy();
    expect(wrapper.contains(mockMovie.genres.join(" & "))).toBeTruthy();
    expect(wrapper.contains(mockMovie.overview)).toBeTruthy();
    expect(wrapper.contains(`${mockMovie.runtime} min`)).toBeTruthy();
  });
});
