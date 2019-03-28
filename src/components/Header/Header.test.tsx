import * as React from "react";
import { shallow } from "enzyme";
// components
import Header from "./Header";
// styles
import * as styles from "./Header.styles.css";

describe("Header component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Header)).toBeTruthy();
    expect(wrapper.find(`${styles.main}`)).toBeTruthy();
  });
  it("... matches the snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  it("... renders passed children", () => {
    const TestComponent = () => <span>Test</span>;
    const wrapper = shallow(<Header>{TestComponent}</Header>);

    expect(wrapper.find(TestComponent)).toBeTruthy();
  });
});
