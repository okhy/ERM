import * as React from "react";
// components
import Button from "Components/Button/Button";
// import Input from "../Input/Input";
// styles
import * as styles from "./MovieSearch.styles.css";

class MovieSearch extends React.Component<
  { submitAction?(e: any): void },
  { value: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event: React.SyntheticEvent): void {
    event.preventDefault();
    this.props.submitAction(event);
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
              onChange={this.handleChange}
              value={this.state.value}
            />
          </div>
          <Button label="search" variant="white" type="submit" />
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
