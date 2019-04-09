import { movieListQuery } from "./../types";
// import { IMovies } from "./../../__mocks__/moviesMocks";

export default (() => {
  const apiURL = "https://reactjs-cdp.herokuapp.com";

  return {
    getMovies: (query: movieListQuery) => {
      const queryOptions = Object.keys(query).reduce(
        (acc, key) => `${acc}?${key}=${query[key]}`,
        ""
      );
      const result = fetch(`${apiURL}/movies${queryOptions}`)
        .then(response => response.json())
        .catch(error => {
          console.log(error);
        });

      return result;
    }
  };
})();

// export default movieService;
