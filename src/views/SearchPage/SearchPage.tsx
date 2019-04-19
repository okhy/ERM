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
  movieIDList: number[];
};

const SearchPage: React.SFC<SearchPageProps> = ({ movieIDList }) => (
  <div>
    <Header>
      <MovieSearch />
    </Header>
    <div>
      <MovieGrid movieIDs={movieIDList} />
    </div>
    <Footer />
  </div>
);

export { SearchPage };
/* istanbul ignore next*/
export default connect(
  (state: StateTypes.ApplicationState): { movieIDList: number[] } => {
    return {
      movieIDList:
        state.searchPage.movies.map((movie: MovieTypes.IMovie) => movie.id) ||
        []
    };
  },
  undefined
)(SearchPage);
