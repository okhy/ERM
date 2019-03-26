import * as React from "react";
import { shallow } from "enzyme";
// components
import Footer from "./Footer";
import LogoBar from "./../LogoBar/LogoBar";

describe("Footer component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find(Footer)).toBeTruthy();
    expect(wrapper.find(LogoBar)).toBeTruthy();
    // snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
