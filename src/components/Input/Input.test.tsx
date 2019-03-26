import * as React from "react";
import { shallow } from "enzyme";
// components
import Input from "./Input";

describe("Input Component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find(Input)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
});
