import * as React from "react";
import { shallow } from "enzyme";
// components
import MovieDetails from "./MovieDetails";
import Poster from "Components/Poster/Poster";
// styles
import * as styles from "./MovieDetails.styles.css";
// mocks
import { mockMovie } from "Mocks/movieMocks";

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
