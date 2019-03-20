import * as React from "react";
import { shallow } from "enzyme";
// components
import ClassComponent from "./ClassComponent";

describe("ClassComponent...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<ClassComponent />);

    expect(wrapper.find(ClassComponent)).toBeTruthy();
  });
  it("...renders passed content", () => {
    const testContent = "test content";
    const wrapper = shallow(<ClassComponent content={testContent} />);

    expect(wrapper.contains(testContent)).toBeTruthy();
    
  })
});
