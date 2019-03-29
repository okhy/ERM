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
  it("... renders basic button", (): void => {
    const wrapper = shallow(<Button label="test" />);
    expect(wrapper.find(`.${styles.basic}`)).toBeTruthy();
  });
  it("... renders primary button", () => {
    const wrapper = shallow(<Button label="primary" type="primary" />);
    expect(wrapper.find(`.${styles.primary}`)).toBeTruthy();
  });
  it("... renders negative button", () => {
    const wrapper = shallow(<Button label="negative" type="negative" />);
    expect(wrapper.find(`.${styles.negative}`)).toBeTruthy();
  });
  it("... renders disabled button", () => {
    const wrapper = shallow(<Button label="disabled" disabled={true} />);

    expect(wrapper.find(`.${styles.basic}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.basic}`).prop("disabled")).toBeTruthy();
  });
  it("... does not return undefined as class", () => {
    const wrapper = shallow(<Button label="basic" />);
    expect(wrapper.hasClass("undefined")).toBeFalsy();
  });
  it("... renders passed icon", () => {
    const wrapper = shallow(<Button label="basic" icon="fab fa-font-awesome-flag" />);
    expect(wrapper.find(`${styles.icon}`)).toBeTruthy();
    expect(wrapper.find(`${styles.icon}`).hasClass("fa-font-awesome-flag")).toBeTruthy();
  });
  // todo:
  it.todo("... renders 'small' type'", () => {
    const wrapper = shallow(<Button label="basic" type="primary" size="small" />);
    expect(wrapper.find(`.${styles.small}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.smallIcon}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.smallLabel}`)).toBeTruthy();
  });
  it.todo("... renders properly depending on background (white on gray, gray on white)");
  it.todo("... executes passed click action");
  it.todo("... shows pointer if it's a link");
});
