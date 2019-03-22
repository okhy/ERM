import * as React from "react";
import { shallow } from "enzyme";
// components
import SearchPage from "./SearchPage";

describe("SearchPage component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<SearchPage />);

    expect(wrapper.find(SearchPage)).toBeTruthy();
  });
});
