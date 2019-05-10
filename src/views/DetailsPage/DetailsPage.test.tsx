import * as React from "react";
import { shallow } from "enzyme";
// components
import { DetailsPage } from "./DetailsPage";
import { MovieTypes } from "Types";

const mockMovie: MovieTypes.IMovie = {
  id: 1,
  title: "Pulp Fiction",
  poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  releaseDate: "1994-09-10",
  genres: ["Thriller", "Crime"],
  rating: 8
};

const mockMatch = { params: { id: "1" } };

describe("DetailsPage component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(
      <DetailsPage
        match={mockMatch}
        details={mockMovie}
        detailsID={1}
        getDetails={jest.fn()}
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
        details={mockMovie}
        detailsID={1}
        getDetails={jest.fn()}
        similarMovies={[1, 2, 3, 4]}
        fetchMovie={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("... sets its own state", () => {
    const wrapper = shallow(
      <DetailsPage
        match={mockMatch}
        details={mockMovie}
        detailsID={1}
        getDetails={jest.fn()}
        similarMovies={[1, 2, 3, 4]}
        fetchMovie={jest.fn()}
      />
    );
    expect(wrapper.state("id")).toEqual(1);
  });
  it("... calls getMovie on mount", () => {
    const mockGetMovie = jest.fn();

    shallow(
      <DetailsPage
        match={mockMatch}
        details={mockMovie}
        detailsID={1}
        getDetails={jest.fn()}
        similarMovies={[1, 2, 3, 4]}
        fetchMovie={mockGetMovie}
      />
    );

    expect(mockGetMovie).toHaveBeenCalled();
  });
});
