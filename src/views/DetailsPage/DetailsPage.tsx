import * as React from "react";
// components
import Header from "./../../components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieGrid from "./../../components/MovieGrid/MovieGrid";
import Footer from "./../../components/Footer/Footer";
import Button from "./../../components/Button/Button";

const DetailsPage = () => {
  const SearchLinkButton = <Button type="primary" label="search" />;
  return (
    <div>
      <Header actionItem={SearchLinkButton}>
        <MovieDetails />
      </Header>
      <div>
        <MovieGrid />
      </div>
      <Footer />
    </div>
  );
};
export default DetailsPage;
