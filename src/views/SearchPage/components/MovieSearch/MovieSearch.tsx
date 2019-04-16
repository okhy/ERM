import * as React from "react";
// components
import Button from "Components/Button/Button";
// styles
import * as styles from "./MovieSearch.styles.css";
import { MovieListQuery } from "Root/types";

type searchType = "title" | "genres";

type MoviesearchProps = {
  submitAction?: (query: MovieListQuery) => void;
  query?: MovieListQuery;
};

class MovieSearch extends React.Component<
  MoviesearchProps,
  { searchFieldValue: string; searchBy: searchType }
> {
  constructor(props: {}) {
    super(props);
    this.state = { searchFieldValue: "", searchBy: "title" };

    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
    this.handleSearchByChange = this.handleSearchByChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.query) {
      this.setState({
        searchFieldValue: this.props.query.search,
        searchBy: this.props.query.searchBy
      });
    }
  }
  handleSearchFieldChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchFieldValue: event.target.value });
  }
  handleSearchByChange(type: searchType) {
    this.setState({ searchBy: type });
  }
  handleSubmit(event: React.SyntheticEvent): void {
    event.preventDefault();
    this.props.submitAction({
      search: this.state.searchFieldValue,
      searchBy: this.state.searchBy
    });
  }
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
            clickAction={event => {
              event.preventDefault();
              this.handleSearchByChange("title");
            }}
          />
          <Button
            label="genres"
            size="small"
            variant={this.state.searchBy === "genres" ? "primary" : "white"}
            clickAction={event => {
              event.preventDefault();
              this.handleSearchByChange("genres");
            }}
          />
        </div>
      </form>
    );
  }
}

export default MovieSearch;
