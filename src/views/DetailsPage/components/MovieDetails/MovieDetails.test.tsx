import * as React from "react";
import { shallow } from "enzyme";
// components
import MovieDetails from "./MovieDetails";
// styles
import * as styles from "./MovieDetails.styles.css";

describe("MovieDetails component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<MovieDetails />);
    expect(wrapper.find(MovieDetails)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<MovieDetails />);
    expect(wrapper).toMatchSnapshot();
  });

  it.todo("... renders passed props");

  it("... aplies styles", () => {});
  const wrapper = shallow(<MovieDetails />);

  expect(wrapper.find(`.${styles.main}`)).toBeTruthy();
  expect(wrapper.find(`.${styles.poster}`)).toBeTruthy();
  expect(wrapper.find(`.${styles.details}`)).toBeTruthy();
  expect(wrapper.find(`.${styles.title}`)).toBeTruthy();
  expect(wrapper.find(`.${styles.category}`)).toBeTruthy();
  expect(wrapper.find(`.${styles.yearAndDuration}`)).toBeTruthy();
  expect(wrapper.find(`.${styles.year}`)).toBeTruthy();
  expect(wrapper.find(`.${styles.duration}`)).toBeTruthy();
  expect(wrapper.find(`.${styles.description}`)).toBeTruthy();
});
