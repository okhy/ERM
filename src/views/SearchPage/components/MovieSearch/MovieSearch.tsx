import * as React from "react";

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
        <input type="text" placeholder="Movie title" onChange={this.handleChange.bind(this)} value={this.state.value} />
        <div>
          <span>search by</span>
          <button>title</button>
          <button>genre</button>
        </div>
        <button>search</button>
      </div>
    );
  }
}

export default MovieSearch;
