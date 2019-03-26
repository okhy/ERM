import * as React from "react";
import { shallow } from "enzyme";
// components
import LogoBar from "./LogoBar";
// import * as styles from "./LogoBar.styles.css";

describe("LogoBar component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<LogoBar />);

    expect(wrapper.find(LogoBar)).toBeTruthy();
    // expect(wrapper.hasClass(styles.main)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<LogoBar />);
    expect(wrapper).toMatchSnapshot();
  });
  it("... renders passed elements", () => {
    const TestComponent = () => <button>Test</button>;
    const wrapper = shallow(<LogoBar button={TestComponent} />);
    expect(wrapper.find(TestComponent)).toBeTruthy();
  });
});
