import * as React from "react";
// components
import Header from "Components/Header/Header";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MovieGrid from "Components/MovieGrid/MovieGrid";
import Footer from "Components/Footer/Footer";
// redux
import { connect } from "react-redux";

const SearchPage = () => (
  <div>
    <Header>
      <MovieSearch />
    </Header>
    <div>
      <MovieGrid />
    </div>
    <Footer />
  </div>
);

export default connect(
  (state: any) => ({
    movies: state.searchResults.movies || false
  }),
  (dispatch: any) => ({
    testAction: () => {
      dispatch({ type: "TEST" });
    }
  })
)(SearchPage);

// export default SearchPage;
