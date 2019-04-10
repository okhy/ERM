import {
  MovieListQuery,
  ResponseMovie,
  ResponseMovieList,
  IMovie
} from "Types";

const movieService = () => {
  const apiURL = "https://reactjs-cdp.herokuapp.com";

  const transformResponseMovie = (movie: ResponseMovie): IMovie => {
    let formattedMovie: IMovie = {
      id: movie.id,
      title: movie.title
    };
    // todo: find better way to do these shenanigans
    if (movie.poster_path) formattedMovie.poster = movie.poster_path;
    if (movie.release_date) formattedMovie.releaseDate = movie.release_date;
    if (movie.genres) formattedMovie.genres = movie.genres;

    return formattedMovie;
  };

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
              (movie: ResponseMovie): IMovie => transformResponseMovie(movie)
            )
        )
        .catch(error => error);

      return result;
    },
    getMovie: (id: string) => {
      const result: Promise<Error | IMovie> = fetch(`${apiURL}/${id}`)
        .then((response: Response) => response.json())
        .then(
          (responseData: ResponseMovie): IMovie =>
            transformResponseMovie(responseData)
        )
        .catch(error => error);

      return result;
    }
  };
};

export default movieService();
export { movieService };
