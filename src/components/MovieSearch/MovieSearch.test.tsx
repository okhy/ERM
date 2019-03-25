import * as React from "react";
import { shallow } from "enzyme";
// components
import MovieSearch from "./MovieSearch";

describe("MovieSearch component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<MovieSearch />);

    expect(wrapper.find(MovieSearch)).toBeTruthy();
  });
  // todo: test value change
  it("...updates the value", () => {
    const wrapper = shallow(<MovieSearch />);

    wrapper.find("input").simulate("change", {
      target: { value: "test string" }
    });

    expect(wrapper.state("value")).toEqual("test string");
    expect(wrapper.find("input").prop("value")).toEqual("test string");
  });
});
