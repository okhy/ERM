import * as React from "react";
import { shallow } from "enzyme";
import movieService from "Services/movieService";
// components
import { MovieSearch } from "./MovieSearch";
// styles
import * as styles from "./MovieSearch.styles.css";
import { MovieTypes } from "Types";

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

  it("... changes searchBy method", () => {
    const wrapper = shallow(<MovieSearch submitAction={jest.fn()} />);
    expect(wrapper.state("searchBy")).toEqual("title");
    wrapper
      .find(`[label='genres']`)
      .dive()
      .find("button")
      .simulate("click", { preventDefault: () => {} });

    expect(wrapper.state("searchBy")).toEqual("genres");
  });

  it("... calls passed action on submit", () => {
    const mockAction = jest.fn();
    const wrapper = shallow(<MovieSearch submitAction={mockAction} />);

    wrapper.simulate("submit", { preventDefault: jest.fn() });

    expect(mockAction).toHaveBeenCalled();
  });

  it("... sets passed query to own state with one prop", () => {
    const mockQuery: MovieTypes.MovieListQuery = {
      search: "test title"
    };

    const wrapper = shallow(
      <MovieSearch submitAction={jest.fn()} query={mockQuery} />
    );

    expect(wrapper.state("searchFieldValue")).toEqual(mockQuery.search);
    expect(wrapper.state("searchBy")).toEqual("title");
  });

  it("... sets passed query to own state with both props", () => {
    const mockQuery: MovieTypes.MovieListQuery = {
      search: "test title",
      searchBy: "genres"
    };

    const wrapper = shallow(
      <MovieSearch submitAction={jest.fn()} query={mockQuery} />
    );

    expect(wrapper.state("searchFieldValue")).toEqual(mockQuery.search);
    expect(wrapper.state("searchBy")).toEqual("genres");
  });
  it("... sets up window.location.search", () => {
    location.search = "initialHash";

    const mockQuery: MovieTypes.MovieListQuery = {
      search: "test title",
      searchBy: "title"
    };
    const submitActionMock = jest.fn();
    const wrapper = shallow(
      <MovieSearch submitAction={submitActionMock} query={mockQuery} />
    );
    wrapper.simulate("submit", { preventDefault: jest.fn() });
    console.log(location);
    const expectedString = movieService.formatOptionsToQueryString(mockQuery);
    expect(submitActionMock).toHaveBeenCalledWith(mockQuery);
    expect(location.search).toEqual(expectedString);
  });
});
