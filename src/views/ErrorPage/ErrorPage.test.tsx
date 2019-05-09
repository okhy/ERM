import * as React from "react";
import { shallow } from "enzyme";
import ErrorPage from "./ErrorPage";

describe("ErrorPage ...", () => {
  it("... renders properly", () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper.find(ErrorPage)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
