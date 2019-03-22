import * as React from "react";
import { shallow } from "enzyme";
// components
import TopBar from "./TopBar";

describe("TopBar component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<TopBar />);

    expect(wrapper.find(TopBar)).toBeTruthy();
  });
});
