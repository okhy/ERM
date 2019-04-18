import * as React from "react";
import { shallow } from "enzyme";
// components
import { MovieSearch } from "./MovieSearch";
// styles
import * as styles from "./MovieSearch.styles.css";

describe("MovieSearch component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<MovieSearch submitAction={jest.fn()} />);
    expect(wrapper.find(MovieSearch)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<MovieSearch submitAction={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("... updates the value", () => {
    const wrapper = shallow(<MovieSearch submitAction={jest.fn()} />);

    wrapper.find(`.${styles.searchInput}`).simulate("change", {
      target: { value: "test string" }
    });

    expect(wrapper.state("searchFieldValue")).toEqual("test string");
    expect(wrapper.find(`input`).prop("value")).toEqual("test string");
  });
  it("... renders css classes", () => {
    const wrapper = shallow(<MovieSearch submitAction={jest.fn()} />);
    expect(wrapper.find(`.${styles.main}`)).toBeTruthy();
  });
  it("... calls passed action on submit", () => {
    const mockAction = jest.fn();
    const wrapper = shallow(<MovieSearch submitAction={mockAction} />);

    wrapper.simulate("submit", { preventDefault: jest.fn() });

    expect(mockAction).toHaveBeenCalled();
  });
});
