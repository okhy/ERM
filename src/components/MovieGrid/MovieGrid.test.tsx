import * as React from "react";
import { shallow } from "enzyme";
// components
import MovieGrid from "./MovieGrid";

describe("MovieGrid component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<MovieGrid />);

    expect(wrapper.find(MovieGrid)).toBeTruthy();
  });
});
