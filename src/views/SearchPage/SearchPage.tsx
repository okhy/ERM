import * as React from "react";
// components
import Header from "Components/Header/Header";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MovieGrid from "Components/MovieGrid/MovieGrid";
import Footer from "Components/Footer/Footer";
// redux imports
import { connect } from "react-redux";
import { MovieTypes, StateTypes } from "Types";

type SearchPageProps = {
  movies: number[];
};

const SearchPage: React.SFC<SearchPageProps> = ({ movies }) => (
  <div>
    <Header>
      <MovieSearch />
    </Header>
    <div>
      <MovieGrid movieIDs={movies} />
    </div>
    <Footer />
  </div>
);

export default connect(
  (state: StateTypes.ApplicationState): { movies: number[] } => {
    return {
      movies:
        state.searchPage.movies.map((movie: MovieTypes.IMovie) => movie.id) ||
        []
    };
  },
  undefined
)(SearchPage);
