import * as React from "react";
// components
import Button from "Components/Button/Button";
// styles
import * as styles from "./MovieSearch.styles.css";
import { MovieTypes } from "Types";
// redux
import { connect } from "react-redux";
import { movieSearch } from "Views/SearchPage/SearchPage.actions";
import movieService from "Services/movieService";

type searchType = "title" | "genres";

type movieSearchProps = {
  submitAction: (query: MovieTypes.MovieListQuery) => void;
  query?: MovieTypes.MovieListQuery;
};

type MovieSearchType = { searchFieldValue: string; searchBy: searchType };

class MovieSearch extends React.Component<movieSearchProps, MovieSearchType> {
  constructor(props: movieSearchProps) {
    super(props);
    const searchValueExists = this.props.query && this.props.query.search;
    const searchByValueExists = this.props.query && this.props.query.searchBy;

    this.state = {
      searchFieldValue: searchValueExists ? this.props.query.search : "",
      searchBy: searchByValueExists ? this.props.query.searchBy : "title"
    };
  }
  // search on mount
  componentDidMount() {
    if (this.state.searchFieldValue) {
      this.props.submitAction({
        search: this.state.searchFieldValue,
        searchBy: this.state.searchBy,
        ...this.props.query
      });
    }
  }

  handleSearchFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({ searchFieldValue: event.target.value });
  };

  handleSearchByChange = (type: searchType) => (
    event: React.MouseEvent
  ): void => {
    event.preventDefault();
    this.setState({ searchBy: type });
  };

  handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    const query = {
      search: this.state.searchFieldValue,
      searchBy: this.state.searchBy,
      ...this.props.query
    };

    this.props.submitAction(query);
    const newHash = this.state.searchFieldValue
      ? movieService.formatOptionsToQueryString(query)
      : "";

    location.hash = newHash;
  };

  render() {
    return (
      <form className={styles.main} onSubmit={this.handleSubmit}>
        <div className={styles.searchWrap}>
          <div className={styles.searchField}>
            <span className={styles.searchLabel}>Find a movie</span>
            <input
              className={styles.searchInput}
              type="text"
              placeholder={"Movie title"}
              onChange={this.handleSearchFieldChange}
              value={this.state.searchFieldValue}
            />
          </div>
          <Button
            label="search"
            variant="white"
            type="submit"
            clickAction={this.handleSubmit}
          />
        </div>
        <div className={styles.options}>
          <span className={styles.optionsLabel}>search by</span>
          <Button
            label="title"
            size="small"
            variant={this.state.searchBy === "title" ? "primary" : "white"}
            clickAction={this.handleSearchByChange("title")}
          />
          <Button
            label="genres"
            size="small"
            variant={this.state.searchBy === "genres" ? "primary" : "white"}
            clickAction={this.handleSearchByChange("genres")}
          />
        </div>
      </form>
    );
  }
}

export { MovieSearch };

/* istanbul ignore next*/
export default connect(
  null,
  (dispatch: any) => ({
    submitAction: (query: MovieTypes.MovieListQuery) => {
      movieSearch(query)(dispatch);
    }
  })
)(MovieSearch);
