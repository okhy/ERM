import * as React from "react";
import { shallow } from "enzyme";
// components
import MovieGridItem from "./MovieGridItem";

describe("MovieGridItem component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<MovieGridItem />);

    expect(wrapper.find(MovieGridItem)).toBeTruthy();
  });
});
