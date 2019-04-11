import {
  MovieListQuery,
  ResponseMovie,
  ResponseMovieList,
  IMovie
} from "Types";
export type resultType = { movie: IMovie; similar: IMovie[] };

type movieServiceType = () => {
  getMovieList(query: MovieListQuery): Promise<Error | IMovie[]>;
  getMovieByID(id: string): Promise<Error | resultType>;
};

const movieService: movieServiceType = () => {
  const apiURL = "https://reactjs-cdp.herokuapp.com";

  const transformResponseMovie = (movie: ResponseMovie): IMovie => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    releaseDate: movie.release_date,
    genres: movie.genres
  });

  const getMovieList = (query: MovieListQuery): Promise<Error | IMovie[]> => {
    const queryOptions: string = Object.keys(query).reduce(
      (acc, key) => `${acc}?${key}=${query[key]}`,
      ""
    );
    return fetch(`${apiURL}/movies${queryOptions}`)
      .then((response: Response) => response.json())
      .then(
        (responseData: ResponseMovieList): IMovie[] =>
          responseData.data.map(
            (movie: ResponseMovie): IMovie => transformResponseMovie(movie)
          )
      )
      .catch(error => error);
  };
  const getMovieByID = (
    id: string
  ): Promise<Error | { movie: IMovie; similar: IMovie[] }> => {
    return fetch(`${apiURL}/${id}`)
      .then((response: Response) => response.json())
      .then(
        (responseData: ResponseMovie): IMovie =>
          transformResponseMovie(responseData)
      )
      .then(async (resultMovie: IMovie) => {
        await getMovieList({
          search: resultMovie.genres.join(", "),
          searchBy: "genres"
        }).then(movieList => ({ movie: resultMovie, similar: movieList }));
      })
      .catch(error => error);
  };

  return {
    getMovieList,
    getMovieByID
  };
};

export default movieService();
