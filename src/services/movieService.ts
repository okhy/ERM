import {
  MovieListQuery,
  ResponseMovie,
  ResponseMovieList,
  IMovie
} from "Types";

const movieService = () => {
  const apiURL = "https://reactjs-cdp.herokuapp.com";

  return {
    getMovies: (query: MovieListQuery) => {
      const queryOptions = Object.keys(query).reduce(
        (acc, key) => `${acc}?${key}=${query[key]}`,
        ""
      );
      const result: Promise<Error | IMovie[]> = fetch(
        `${apiURL}/movies${queryOptions}`
      )
        .then((response: Response) => response.json())
        .then(
          (responseData: ResponseMovieList): IMovie[] =>
            responseData.data.map(
              (movie: ResponseMovie): IMovie => ({
                id: movie.id,
                title: movie.title,
                poster: movie.poster_path,
                releaseDate: movie.release_date,
                genres: movie.genres
              })
            )
        )
        .catch(error => error);

      return result;
    },
    getMovie: (id: string) => {
      const result: Promise<Error | IMovie> = fetch(`${apiURL}/${id}`)
        .then((response: Response) => response.json())
        .then(
          (responseData: ResponseMovie): IMovie => ({
            id: responseData.id,
            title: responseData.title,
            poster: responseData.poster_path,
            releaseDate: responseData.release_date,
            genres: responseData.genres
          })
        )
        .catch(error => error);

      return result;
    }
  };
};

export default movieService();
