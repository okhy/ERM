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
  it("... renders button variants", () => {
    const wrapper = shallow(
      <div>
        <Button label="test" />
        <Button label="test" variant="white" />
        <Button label="primary" variant="primary" />
        <Button label="negative" variant="negative" />
        <Button label="disabled" disabled={true} />
      </div>
    );
    expect(wrapper.find(`.${styles.basic}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.white}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.primary}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.negative}`)).toBeTruthy();
    expect(wrapper.find("[disabled]")).toBeTruthy();
  });
  it("... does not return undefined as class", () => {
    const wrapper = shallow(<Button label="basic" />);
    expect(wrapper.hasClass("undefined")).toBeFalsy();
  });
  it("... renders passed icon", () => {
    const wrapper = shallow(
      <Button label="basic" icon="fab fa-font-awesome-flag" />
    );

    expect(wrapper.find(`.${styles.icon}`)).toBeTruthy();
    expect(wrapper.find("i.fa-font-awesome-flag")).toBeTruthy();
  });
  it("... renders 'small' type'", () => {
    const wrapper = shallow(
      <Button
        label="basic"
        variant="primary"
        size="small"
        icon="fab fa-font-awesome-flag"
      />
    );

    expect(wrapper.find(`.${styles.small}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.smallIcon}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.smallLabel}`)).toBeTruthy();
  });
  it("... renders passed type", () => {
    const testType = "submit";
    const wrapper = shallow(<Button label="basic" type={testType} />);

    expect(wrapper.prop("type")).toEqual(testType);
  });
  it("... executes passed click action", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Button label="basic" clickAction={mockFn} />);

    wrapper.simulate("click");

    expect(mockFn).toHaveBeenCalled();
  });
  it.todo("... shows pointer if action is a link");
});
