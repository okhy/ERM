import * as React from "react";
// components
import Header from "Components/Header/Header";
import MovieGrid from "Components/MovieGrid/MovieGrid";
import Footer from "Components/Footer/Footer";
import Button from "Components/Button/Button";
// child components
import MovieDetails from "./components/MovieDetails/MovieDetails";

const DetailsPage = () => {
  const SearchLinkButton = <Button variant="white" label="search" />;
  return (
    <div>
      <Header actionItem={SearchLinkButton}>
        <MovieDetails title="" overview="" />
      </Header>
      <div>
        <MovieGrid />
      </div>
      <Footer />
    </div>
  );
};
export default DetailsPage;
