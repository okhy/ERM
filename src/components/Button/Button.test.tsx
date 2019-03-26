import * as React from "react";
import { shallow } from "enzyme";
// components
import Button from "./Button";

describe("Button component...", () => {
  it("...renders without errors", () => {
    const label = "test label";

    const wrapper = shallow(<Button label={label} />);

    expect(wrapper.find(Button)).toBeTruthy();
    expect(wrapper.contains(label)).toBeTruthy();
    // snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
