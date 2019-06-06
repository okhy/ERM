import { MovieTypes, StateTypes } from "Types";
// react
import * as React from "react";
// components
import Header from "Components/Header/Header";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MovieGrid from "Components/MovieGrid/MovieGrid";
import Footer from "Components/Footer/Footer";
// services
import movieService from "Services/movieService";
// redux imports
import { connect } from "react-redux";
// selector
import sortMoviesSelector from "Views/SearchPage/SearchPage.selector";

type SearchPageProps = {
  movieIDList: number[];
  // router props
  location: { search?: string };
};

const SearchPage: React.SFC<SearchPageProps> = ({
  location,
  movieIDList,
  ...props
}: SearchPageProps) => {
  return (
    <div>
      <Header>
        <MovieSearch
          query={
            location.search &&
            movieService.formatQueryStringToOptions(location.search)
          }
        />
      </Header>
      <div>
        <MovieGrid movieIDs={movieIDList} />
      </div>
      <Footer />
    </div>
  );
};

export { SearchPage };
/* istanbul ignore next*/
export default connect(
  (state: StateTypes.applicationState): { movieIDList: number[] } => {
    return {
      movieIDList:
        sortMoviesSelector(state).map((movie: MovieTypes.IMovie) => movie.id) ||
        []
    };
  },
  undefined
)(SearchPage);
