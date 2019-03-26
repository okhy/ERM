import * as React from "react";
import { shallow } from "enzyme";
// components
import MovieDetails from "./MovieDetails";

describe("MovieDetails component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<MovieDetails />);

    expect(wrapper.find(MovieDetails)).toBeTruthy();
    // snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
