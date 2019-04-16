import * as React from "react";
// components
import Header from "Components/Header/Header";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MovieGrid from "Components/MovieGrid/MovieGrid";
import Footer from "Components/Footer/Footer";
// redux imports
import { connect } from "react-redux";
import { StateType } from "Root/types";
import { IMovie } from "Root/types";

type SearchPageType = {
  movies: number[];
};

const SearchPage: React.SFC<SearchPageType> = props => (
  <div>
    <Header>
      <MovieSearch />
    </Header>
    <div>
      <MovieGrid movieIDs={props.movies} />
    </div>
    <Footer />
  </div>
);

export default connect(
  (state: StateType.ApplicationState): { movies: number[] } => {
    return {
      movies: state.searchPage.movies.map((movie: IMovie) => movie.id) || []
    };
  },
  undefined
)(SearchPage);
