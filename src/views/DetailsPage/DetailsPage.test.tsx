import * as React from "react";
import { shallow } from "enzyme";
// components
import DetailsPage from "./DetailsPage";

describe("DetailsPage component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<DetailsPage />);
    expect(wrapper.find(DetailsPage)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<DetailsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
