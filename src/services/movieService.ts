import { ResponseMovie, ResponseMovieList, MovieTypes } from "Types";
export type resultType = {
  movie: MovieTypes.IMovie;
  similar: MovieTypes.IMovie[];
};

type getMovieListType = (
  query: MovieTypes.MovieListQuery,
  errorCallback?: (error: Error) => void,
  successCallback?: (movies: MovieTypes.IMovie[]) => void
) => Promise<any>;

type getMovieByIDType = (
  id: string,
  errorCallback?: (error: Error) => void,
  successCallback?: (movie: MovieTypes.IMovie) => void
) => Promise<any>;

type movieServiceReturnType = {
  getMovieList: getMovieListType;
  getMovieByID: getMovieByIDType;
};

const movieService = (): movieServiceReturnType => {
  const apiURL = "https://reactjs-cdp.herokuapp.com";

  const transformResponseMovie = (movie: ResponseMovie): MovieTypes.IMovie => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    releaseDate: movie.release_date,
    genres: movie.genres,
    rating: movie.vote_average,
    runtime: movie.runtime,
    overview: movie.overview
  });
  // convert options from object to query string "?optval&opt2=val2"
  const formatOptions = (query: MovieTypes.MovieListQuery): string =>
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
        (responseData: ResponseMovieList): MovieTypes.IMovie[] =>
          responseData.data.map(
            (movie: ResponseMovie): MovieTypes.IMovie =>
              transformResponseMovie(movie)
          )
      )
      .then((movies: MovieTypes.IMovie[]) => {
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
        (responseData: ResponseMovie): MovieTypes.IMovie =>
          transformResponseMovie(responseData)
      )
      .then((resultMovie: MovieTypes.IMovie) => {
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
