import * as React from "react";
import { shallow } from "enzyme";
// components
import Footer from "./Footer";

describe("Footer component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find(Footer)).toBeTruthy();
  });
});
