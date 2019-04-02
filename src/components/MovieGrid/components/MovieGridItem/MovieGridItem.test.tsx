import * as React from "react";
import { shallow } from "enzyme";
// components
import MovieGridItem, { IMovieGridItem } from "./MovieGridItem";
// mock data
const mockMovie: IMovieGridItem = {
  id: 1,
  title: "Pulp Fiction",
  poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  releaseDate: "1994-09-10",
  genres: ["Thriller", "Crime"]
};

describe("MovieGridItem component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<MovieGridItem {...mockMovie} />);
    expect(wrapper.find(MovieGridItem)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<MovieGridItem {...mockMovie} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("... renders passed props", () => {
    const wrapper = shallow(<MovieGridItem {...mockMovie} />);

    console.log(wrapper.debug());

    expect(wrapper.find(`${mockMovie.title}`)).toBeTruthy();
    expect(wrapper.find(`${mockMovie.releaseDate.substr(0, 4)}`)).toBeTruthy();
    expect(wrapper.find(`${mockMovie.genres.join(" & ")}`)).toBeTruthy();
  });
});
