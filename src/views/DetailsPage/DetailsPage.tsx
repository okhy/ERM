import { StateTypes, MovieTypes } from "Types";

// react
import * as React from "react";
// components
import Header from "Components/Header/Header";
import MovieGrid from "Components/MovieGrid/MovieGrid";
import Footer from "Components/Footer/Footer";
import Button from "Components/Button/Button";
// child components
import MovieDetails from "./components/MovieDetails/MovieDetails";
// redux imports
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchMovieById } from "Views/DetailsPage/DetailsPage.actions";

type DetailsPageProps = {
  // router props
  match?: any;
  // redux props
  details: MovieTypes.IMovie;
  similarMovies: number[];
  // redux methods
  getMovie(id: string): void;
};

type DetailsPageState = {
  id: string;
};

class DetailsPage extends React.Component<DetailsPageProps, DetailsPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.props.getMovie(this.state.id);
  }

  render() {
    return (
      <div>
        <Header actionItem={<Button variant="white" label="search" />}>
          <MovieDetails {...this.props.details} />
        </Header>
        <div>
          <MovieGrid
            similarResults={true}
            movieIDs={this.props.similarMovies}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: StateTypes.applicationState) => ({
  details: state.detailsPage.details,
  similarMovies:
    state.detailsPage.similarMovies &&
    state.detailsPage.similarMovies.map((movie: MovieTypes.IMovie) => movie.id)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMovie: (id: string) => {
    fetchMovieById(id)(dispatch);
  }
});

export { DetailsPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
