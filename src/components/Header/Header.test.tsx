import * as React from "react";
import { shallow } from "enzyme";
// components
import Header from "./Header";

describe("Header component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(Header)).toBeTruthy();
  });
});
