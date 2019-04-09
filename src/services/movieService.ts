import { movieListQuery } from "./../types";

const movieService = () => {
  const apiURL = "reactjs-cdp.herokuapp.com/";

  return {
    getMovies: (query: movieListQuery) => {
      const queryOptions = Object.keys(query).reduce(
        (acc, key) => `${acc}?${key}=${query[key]}`,
        ""
      );
      const result = fetch(`${apiURL}/movies${queryOptions}`)
        .then(result => result.json)
        .catch(error => {
          console.log(error);
        });

      return result;
    }
  };
};

export default movieService;
