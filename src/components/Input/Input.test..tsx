import * as React from "react";
import { shallow } from "enzyme";
// components
import Input from "./Input";

describe("Input component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.find(Input)).toBeTruthy();
  });
});
