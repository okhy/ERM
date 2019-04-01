import * as React from "react";
import { shallow } from "enzyme";
// components
import MovieSearch from "./MovieSearch";
// styles
import * as styles from "./MovieSearch.styles.css";

describe("MovieSearch component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<MovieSearch />);
    expect(wrapper.find(MovieSearch)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<MovieSearch />);
    expect(wrapper).toMatchSnapshot();
  });
  it("... updates the value", () => {
    const wrapper = shallow(<MovieSearch />);

    wrapper.find("input").simulate("change", {
      target: { value: "test string" }
    });

    expect(wrapper.state("value")).toEqual("test string");
    expect(wrapper.find("input").prop("value")).toEqual("test string");
  });
  it("... renders css classes", () => {
    const wrapper = shallow(<MovieSearch />);
    expect(wrapper.find(`.${styles.main}`)).toBeTruthy();
  });
});
