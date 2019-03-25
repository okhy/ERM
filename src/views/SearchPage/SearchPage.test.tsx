import * as React from "react";
import { shallow } from "enzyme";
// components
import SearchPage from "./SearchPage";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";

describe("SearchPage component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<SearchPage />);

    expect(wrapper.find(SearchPage)).toBeTruthy();
    expect(wrapper.find(Header)).toBeTruthy();
    expect(wrapper.find(Footer)).toBeTruthy();
  });
});
