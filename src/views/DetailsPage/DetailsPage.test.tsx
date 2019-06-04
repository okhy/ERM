import * as React from "react";
import { shallow } from "enzyme";
// components
import { DetailsPage } from "./DetailsPage";
// mocks
import { mockMovie } from "Mocks/movieMocks";

const mockMatch = { params: { id: "1" } };

jest.mock("react-router-dom", () => ({
  Link: (props: any): any => <div>{props.children}</div>
}));

describe("DetailsPage component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(
      <DetailsPage
        match={mockMatch}
        detailsID={1}
        getDetails={jest.fn(() => mockMovie)}
        similarMovies={[1, 2, 3, 4]}
        fetchMovie={jest.fn()}
      />
    );
    expect(wrapper.find(DetailsPage)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(
      <DetailsPage
        match={mockMatch}
        detailsID={1}
        getDetails={jest.fn(() => mockMovie)}
        similarMovies={[1, 2, 3, 4]}
        fetchMovie={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("... calls getMovie on mount", () => {
    const mockGetMovie = jest.fn();
    const testID = 1;
    shallow(
      <DetailsPage
        match={mockMatch}
        detailsID={testID}
        getDetails={jest.fn(() => mockMovie)}
        similarMovies={[1, 2, 3, 4]}
        fetchMovie={mockGetMovie}
      />
    );

    expect(mockGetMovie).toHaveBeenCalledWith(testID);
  });
  it("... shows spinner when waiting for data", () => {
    const wrapper = shallow(
      <DetailsPage
        match={mockMatch}
        getDetails={jest.fn(() => mockMovie)}
        fetchMovie={jest.fn()}
      />
    );
    expect(wrapper.find("span")).toHaveLength(2);
  });
});
