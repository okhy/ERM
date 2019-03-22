import * as React from "react";
import { shallow } from "enzyme";
// components
import MovieSearch from "./MovieSearch";

describe("MovieSearch component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<MovieSearch />);

    expect(wrapper.find(MovieSearch)).toBeTruthy();
  });
});
