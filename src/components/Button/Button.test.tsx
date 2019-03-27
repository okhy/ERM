import * as React from "react";
import { shallow } from "enzyme";
// components
import Button from "./Button";
import * as styles from "./Button.styles.css";

describe("Button component...", () => {
  it("... renders without errors", () => {
    const label = "test label";
    const wrapper = shallow(<Button label={label} />);

    expect(wrapper.find(Button)).toBeTruthy();
    expect(wrapper.contains(label)).toBeTruthy();
  });
  it("... should match snapshot", () => {
    const wrapper = shallow(<Button label="test" />);
    expect(wrapper).toMatchSnapshot();
  });
  it("... renders with appropriate classes", () => {
    const wrapper = shallow(<Button label="test" />);
    expect(wrapper.prop("className")).toEqual(styles.main);
  });
});
