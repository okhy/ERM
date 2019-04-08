import * as React from "react";
import { shallow } from "enzyme";
// components
import LogoBar from "./LogoBar";
// styles
import * as styles from "./LogoBar.styles.css";

describe("LogoBar component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<LogoBar />);

    expect(wrapper.find(LogoBar)).toBeTruthy();
    expect(wrapper.find(`.${styles.main}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.logo}`)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<LogoBar />);
    expect(wrapper).toMatchSnapshot();
  });
  it("... renders children in wrapper", () => {
    const TestComponent = () => <button>Test</button>;
    const wrapper = shallow(
      <LogoBar>
        <TestComponent />
      </LogoBar>
    );

    expect(wrapper.find(`.${styles.actionsWrapper}`)).toBeTruthy();
    expect(wrapper.find(TestComponent)).toBeTruthy();
  });
});
