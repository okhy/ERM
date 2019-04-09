import * as React from "react";
// components
import Header from "Components/Header/Header";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MovieGrid from "Components/MovieGrid/MovieGrid";
import Footer from "Components/Footer/Footer";

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
