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
  match: { params: { id: string } };
  // redux props
  detailsID?: number;
  getDetails: () => MovieTypes.IMovie;
  similarMovies?: number[];
  // redux methods
  fetchMovie(id: number): void;
};

class DetailsPage extends React.PureComponent<DetailsPageProps, null> {
  componentDidMount() {
    this.props.fetchMovie(+this.props.match.params.id);
  }

  render() {
    const haveDetails = !!this.props.detailsID;
    const haveSimilar =
      !!this.props.similarMovies && !!this.props.similarMovies.length;

    return (
      <div>
        <Header actionItem={<Button variant="white" label="search" />}>
          {haveDetails && <MovieDetails {...this.props.getDetails()} />}
          {!haveDetails && <span>TODO: Spinner component</span>}
        </Header>
        <div>
          {haveSimilar && (
            <MovieGrid
              similarResults={true}
              movieIDs={this.props.similarMovies}
            />
          )}
          {!haveSimilar && <span>TODO: Spinner component</span>}
        </div>
        <Footer />
      </div>
    );
  }
}

/* istanbul ignore next*/
const mapStateToProps = (state: StateTypes.applicationState) => ({
  detailsID: !!state.detailsPage.details && state.detailsPage.details.id,
  getDetails: () => state.detailsPage.details,
  similarMovies:
    state.detailsPage.similarMovies &&
    state.detailsPage.similarMovies.map((movie: MovieTypes.IMovie) => movie.id)
});

/* istanbul ignore next*/
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchMovie: (id: number) => {
    fetchMovieById(id)(dispatch);
  }
});

export { DetailsPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
