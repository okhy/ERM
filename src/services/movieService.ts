import {
  MovieListQuery,
  ResponseMovie,
  ResponseMovieList,
  IMovie
} from "Types";
export type resultType = { movie: IMovie; similar: IMovie[] };

type getMovieListType = (
  query: MovieListQuery,
  errorCallback?: (error: Error) => void,
  successCallback?: (movies: IMovie[]) => void
) => Promise<any>;

type getMovieByIDType = (
  id: string,
  errorCallback?: (error: Error) => void,
  successCallback?: (movie: IMovie) => void
) => Promise<any>;

type movieServiceReturnType = {
  getMovieList: getMovieListType;
  getMovieByID: getMovieByIDType;
};

const movieService = (): movieServiceReturnType => {
  const apiURL = "https://reactjs-cdp.herokuapp.com";

  const transformResponseMovie = (movie: ResponseMovie): IMovie => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    releaseDate: movie.release_date,
    genres: movie.genres
  });
  // convert options from object to query string "?optval&opt2=val2"
  const formatOptions = (query: MovieListQuery): string =>
    Object.keys(query).reduce((accumulator, key, index) => {
      const ampersand = index > 0 ? "&" : "";
      const option = `${key}=${query[key]}`;
      return accumulator + ampersand + option;
    }, "?");

  const getMovieList: getMovieListType = (
    query,
    errorCallback,
    successCallback
  ) =>
    fetch(`${apiURL}/movies${formatOptions(query)}`)
      .then((response: Response) => response.json())
      .then(
        (responseData: ResponseMovieList): IMovie[] =>
          responseData.data.map(
            (movie: ResponseMovie): IMovie => transformResponseMovie(movie)
          )
      )
      .then((movies: IMovie[]) => {
        successCallback(movies);
      })
      .catch((error: Error) => {
        errorCallback(error);
        throw error;
      });

  const getMovieByID: getMovieByIDType = (id, errorCallback, successCallback) =>
    fetch(`${apiURL}/movies/${id}`)
      .then((response: Response) => response.json())
      .then(
        (responseData: ResponseMovie): IMovie =>
          transformResponseMovie(responseData)
      )
      .then((resultMovie: IMovie) => {
        successCallback(resultMovie);
      })
      .catch((error: Error) => {
        errorCallback(error);
      });

  return {
    getMovieList,
    getMovieByID
  };
};

export default movieService();
