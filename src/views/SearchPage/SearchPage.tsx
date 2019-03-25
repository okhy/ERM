import * as React from "react";
// components
import Header from "./../../components/Header/Header";
import MovieSearch from "./../../components/MovieSearch/MovieSearch";
import Footer from "./../../components/Footer/Footer";

const SearchPage = () => (
  <div>
    <Header>
      <MovieSearch />
    </Header>
    <div />
    <Footer />
  </div>
);

export default SearchPage;
