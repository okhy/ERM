import * as React from "react";
// components
import Header from "Components/Header/Header";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MovieGrid from "Components/MovieGrid/MovieGrid";
import Footer from "Components/Footer/Footer";
// redux imports
import { connect } from "react-redux";
// import rootReducer from "Root/index";
import { movieSearch } from "./SearchPage.actions";
import { MovieListQuery, IMovie } from "Root/types";

type SearchPageType = {
  movies: IMovie[];
  submitAction: (query: MovieListQuery) => void;
};

const SearchPage: React.SFC<SearchPageType> = props => (
  <div>
    <Header>
      <MovieSearch submitAction={props.submitAction} />
    </Header>
    <div>
      <MovieGrid />
    </div>
    <Footer />
  </div>
);

export default connect(
  (state: any) => {
    return {
      movies: state.searchPageReducer.movies || []
    };
  },
  dispatch => ({
    submitAction: (query: MovieListQuery) => {
      movieSearch(query)(dispatch);
    }
  })
)(SearchPage);
