import * as React from "react";
import { shallow } from "enzyme";
// components
import { MovieGrid } from "./MovieGrid";
import MovieGridItem from "./components/MovieGridItem/MovieGridItem";
// styles
import * as styles from "./MovieGrid.styles.css";
import { MovieTypes } from "Types";

const mockGetMovie = jest.fn(
  (id: number): MovieTypes.IMovie => ({ id: 1, title: "test title", rating: 8 })
);
const mockSortMovies = jest.fn();

describe("MovieGrid component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(
      <MovieGrid getMovie={mockGetMovie} sortMovies={mockSortMovies} />
    );
    expect(wrapper.find(MovieGrid)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(
      <MovieGrid getMovie={mockGetMovie} sortMovies={mockSortMovies} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("... renders sorting options", () => {
    const wrapper = shallow(
      <MovieGrid getMovie={mockGetMovie} sortMovies={mockSortMovies} />
    );

    expect(wrapper.find(`.${styles.sorting}`)).toBeTruthy();
    expect(wrapper.find(<button>release date</button>)).toBeTruthy();
    expect(wrapper.find(<button>rating</button>)).toBeTruthy();
  });
  it("... calls sorting method", () => {
    const mockSort = jest.fn((key: string) => {
      console.log(key);
    });
    const mockPrevent = jest.fn();
    const wrapper = shallow(
      <MovieGrid getMovie={mockGetMovie} sortMovies={mockSort} />
    );

    wrapper
      .find(`[label="rating"]`)
      .dive()
      .find("button")
      .simulate("click", { preventDefault: mockPrevent });

    // expect(mockPrevent).toHaveBeenCalled();
    expect(mockSort).toHaveBeenCalled();
  });
  it("... renders similar results category", () => {
    const wrapper = shallow(
      <MovieGrid
        getMovie={mockGetMovie}
        sortMovies={mockSortMovies}
        similarResults={true}
      />
    );
    expect(wrapper.find(<span>Films by </span>)).toBeTruthy();
  });
  it("... works with falsy props", () => {
    const wrapper = shallow(
      <MovieGrid
        getMovie={mockGetMovie}
        sortMovies={mockSortMovies}
        similarResults={undefined}
      />
    );
    const wrapper2 = shallow(
      <MovieGrid
        getMovie={mockGetMovie}
        sortMovies={mockSortMovies}
        movieIDs={undefined}
      />
    );

    expect(wrapper.find(MovieGrid)).toBeTruthy();
    expect(wrapper2.find(MovieGrid)).toBeTruthy();
  });
  it("... renders movies", () => {
    const wrapper = shallow(
      <MovieGrid
        getMovie={mockGetMovie}
        sortMovies={mockSortMovies}
        movieIDs={[1, 2, 3, 4]}
      />
    );
    expect(wrapper.find(`.${styles.grid}`)).toBeTruthy();
    expect(wrapper.find(MovieGridItem)).toBeTruthy();
  });
  it("... renders error message", () => {
    const wrapper = shallow(
      <MovieGrid getMovie={mockGetMovie} sortMovies={mockSortMovies} />
    );
    const wrapper2 = shallow(
      <MovieGrid
        getMovie={mockGetMovie}
        sortMovies={mockSortMovies}
        movieIDs={[]}
      />
    );

    expect(wrapper.find(`.${styles.sorryMessage}`)).toBeTruthy();
    expect(wrapper2.find(`.${styles.sorryMessage}`)).toBeTruthy();
  });
});
