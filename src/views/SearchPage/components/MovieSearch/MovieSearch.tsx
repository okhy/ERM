import * as React from "react";
// components
import Button from "Components/Button/Button";

class MovieSearch extends React.Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { value: "" };
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <span>Find your movie</span>
        <input type="text" placeholder="Movie title" onChange=  {this.handleChange.bind(this)} value={this.state.value} />
        <div>
          <span>search by</span>
          <Button label="title" size="small" type="white" />
          <Button label="genre" size="small" type="white" />
        </div>
        <Button label="search" type="primary" />
      </div>
    );
  }
}

export default MovieSearch;
