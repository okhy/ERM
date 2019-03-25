import * as React from "react";

const MovieSearch = () => (
  <div>
    <span>Find your movie</span>
        <input type="text" placeholder="Movie title" />
        <div>
            <span>search by</span>
            <button>title</button>
            <button>genre</button>
        </div>
        <button>search</button>
  </div>
);

export default MovieSearch;
