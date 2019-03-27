import * as React from "react";
import { shallow } from "enzyme";
// components
import Button from "./Button";
import * as styles from "./Button.styles.css";

describe("Button component...", (): void => {
  it("... renders without errors", (): void => {
    const label = "test label";
    const wrapper = shallow(<Button label={label} />);

    expect(wrapper.find(Button)).toBeTruthy();
    expect(wrapper.contains(label)).toBeTruthy();
  });
  it("... should match snapshot", (): void => {
    const wrapper = shallow(<Button label="test" />);
    expect(wrapper).toMatchSnapshot();
  });
  it("... renders with appropriate classes", (): void => {
    const wrapper = shallow(<Button label="test" />);
    expect(wrapper.find("span").prop("className")).toEqual(styles.label);
  });
});
