import * as React from "react";
// components
import Header from "./../../components/Header/Header";
import MovieSearch from "./../../components/MovieSearch/MovieSearch";
import MovieGrid from "./../../components/MovieGrid/MovieGrid";
import Footer from "./../../components/Footer/Footer";

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

export default SearchPage;
