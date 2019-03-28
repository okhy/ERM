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
  it("... renders default button", (): void => {
    const wrapper = shallow(<Button label="test" />);
    expect(wrapper.find(`.${styles.grey}`)).toBeTruthy();
  });
  it("... renders primary button", () => {
    const wrapper = shallow(<Button label="test" type="primary" />);
    expect(wrapper.find(`.${styles.primary}`)).toBeTruthy();
  });
  it("... renders negative button", () => {
    const wrapper = shallow(<Button label="test" type="negative" />);
    expect(wrapper.find(`.${styles.negative}`)).toBeTruthy();
  });
  it("... renders disabled button", () => {
    const wrapper = shallow(<Button label="test" disabled={true} />);
    expect(wrapper.find(`.${styles.grey}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.grey}`).prop("disabled")).toBeTruthy();
  });
});
