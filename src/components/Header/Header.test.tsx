import * as React from "react";
import { shallow } from "enzyme";
// components
import Header from "./Header";
import LogoBar from "./../LogoBar/LogoBar";

describe("Header component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(Header)).toBeTruthy();
    expect(wrapper.find(LogoBar)).toBeTruthy();
  });
  it("...renders passed children", () => {
    const TestComponent = <span>Test</span>;
    const wrapper = shallow(<Header>{TestComponent}</Header>);

    expect(wrapper.find(TestComponent)).toBeTruthy();
  });
});
