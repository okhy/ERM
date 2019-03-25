import * as React from "react";
import { shallow } from "enzyme";
// components
import MovieGrid from "./MovieGrid";
import MovieGridItem from "./components/MovieGridItem/MovieGridItem";

describe("MovieGrid component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<MovieGrid />);

    expect(wrapper.find(MovieGrid)).toBeTruthy();
  });
  it("...renders sorting options", () => {
    const wrapper = shallow(<MovieGrid />);

    expect(wrapper.find("Sort by")).toBeTruthy();
    expect(wrapper.find(<button>release date</button>)).toBeTruthy();
    expect(wrapper.find(<button>rating</button>)).toBeTruthy();
  });
  it("...renders similar results category", () => {
    const wrapper = shallow(<MovieGrid similarResults={true} />);
    expect(wrapper.find(<span>Films by </span>)).toBeTruthy();
  });
  it("...renders movies", () => {
    const wrapper = shallow(<MovieGrid movies={[true]} />);

    expect(wrapper.find(MovieGridItem)).toBeTruthy();
  });
  it("...renders error message", () => {
    const wrapper = shallow(<MovieGrid />);

    expect(wrapper.find(<span>No movies :(</span>
)).toBeTruthy();
  });
});
