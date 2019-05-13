import * as React from "react";
import { shallow } from "enzyme";
// components
import { MovieGridItem } from "./MovieGridItem";
import { MovieTypes } from "Types";
import Poster from "Components/Poster/Poster";
// styles
import * as styles from "./MovieGridItem.styles.css";
// mock data
const mockMovie: MovieTypes.IMovie = {
  id: 1,
  title: "Pulp Fiction",
  poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  releaseDate: "1994-09-10",
  genres: ["Thriller", "Crime"],
  rating: 8
};

jest.mock("react-router-dom", () => ({
  Link: (props: any) => <div>{props.children}</div>
}));

describe("MovieGridItem component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(
      <MovieGridItem {...mockMovie} fetchMovie={jest.fn()} />
    );
    expect(wrapper.find(MovieGridItem)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(
      <MovieGridItem {...mockMovie} fetchMovie={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("... renders passed props", () => {
    const tempReleaseDate = mockMovie.releaseDate.substr(0, 4);
    const wrapper = shallow(
      <MovieGridItem {...mockMovie} fetchMovie={jest.fn()} />
    );

    expect(wrapper.contains(`${mockMovie.title}`)).toBeTruthy();
    expect(wrapper.contains(`${tempReleaseDate}`)).toBeTruthy();
    expect(wrapper.contains(`${mockMovie.genres.join(" & ")}`)).toBeTruthy();
  });
  it("... renders poster ", () => {
    const wrapper = shallow(
      <MovieGridItem {...mockMovie} poster="" fetchMovie={jest.fn()} />
    );
    expect(wrapper.find(Poster)).toBeTruthy();
  });
  it("... renders styles", () => {
    const wrapper = shallow(
      <MovieGridItem {...mockMovie} fetchMovie={jest.fn()} />
    );

    expect(wrapper.find(`.${styles.poster}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.title}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.releaseDate}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.genres}`)).toBeTruthy();
  });
  it("... calls passed callback on click", () => {
    const mockFetchMovie = jest.fn();
    const wrapper = shallow(
      <MovieGridItem {...mockMovie} fetchMovie={mockFetchMovie} />
    );
    wrapper.simulate("click");
    expect(mockFetchMovie).toHaveBeenCalledWith(mockMovie.id);
  });
  it.todo("... passed date render");
});
