import * as React from "react";
// components
import Button from "Components/Button/Button";
// import Input from "../Input/Input";
// styles
import * as styles from "./MovieSearch.styles.css";

class MovieSearch extends React.Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { value: "" };
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event: any): void {
    event.preventDefault();
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
              onChange={this.handleChange.bind(this)}
              value={this.state.value}
            />
          </div>
          <Button label="search" variant="primary" type="submit" />
        </div>
        <div className={styles.options}>
          <span className={styles.optionsLabel}>search by</span>
          <Button label="title" size="small" variant="white" />
          <Button label="genre" size="small" variant="white" />
        </div>
      </form>
    );
  }
}

export default MovieSearch;
