import { ResponseMovie, ResponseMovieList, MovieTypes } from "Types";
export type resultType = {
  movie: MovieTypes.IMovie;
  similar: MovieTypes.IMovie[];
};

type formatQueryType = (query: MovieTypes.MovieListQuery) => string;
type formatOptionsType = (options: string) => MovieTypes.MovieListQuery;
type getMovieListType = (
  query: MovieTypes.MovieListQuery
) => Promise<MovieTypes.IMovie[]>;
type getMovieByIDType = (id: number) => Promise<void | MovieTypes.IMovie>;

type movieServiceReturnType = {
  formatOptionsToQueryString: formatQueryType;
  formatQueryStringToOptions: formatOptionsType;
  getMovieList: getMovieListType;
  getMovieByID: getMovieByIDType;
};

export const transformResponseMovie = (
  movie: ResponseMovie
): MovieTypes.IMovie => ({
  id: movie.id,
  rating: movie.vote_average,
  title: movie.title,
  poster: movie.poster_path,
  releaseDate: movie.release_date,
  genres: movie.genres,
  runtime: movie.runtime,
  overview: movie.overview
});

const movieService = (): movieServiceReturnType => {
  const apiURL = "https://reactjs-cdp.herokuapp.com";

  // convert options from object to query string "?optval&opt2=val2"
  const formatOptionsToQueryString: formatQueryType = query =>
    Object.keys(query).reduce((accumulator, key, index) => {
      const ampersand = index > 0 ? "&" : "";
      const option = `${key}=${query[key].replace(" ", "%20")}`;
      return accumulator + ampersand + option;
    }, "?");

  const formatQueryStringToOptions: formatOptionsType = options => {
    const result = options
      .substr(1)
      .split("&")
      .reduce((acc: any, pair: string) => {
        const splitPair = pair.split("=");
        acc[splitPair[0]] = splitPair[1].replace("%20", " ");
        return acc;
      }, {});

    return result;
  };

  const getMovieList: getMovieListType = query =>
    fetch(`${apiURL}/movies${formatOptionsToQueryString(query)}`)
      .then((response: Response) => response.json())
      .then(
        (responseData: ResponseMovieList): MovieTypes.IMovie[] =>
          responseData.data.map(
            (movie: ResponseMovie): MovieTypes.IMovie =>
              transformResponseMovie(movie)
          )
      )
      .catch((error: Error) => {
        throw error;
      });

  const getMovieByID: getMovieByIDType = id =>
    fetch(`${apiURL}/movies/${id}`)
      .then((response: Response) => response.json())
      .then(
        (responseData: ResponseMovie): MovieTypes.IMovie =>
          transformResponseMovie(responseData)
      )
      .catch((error: Error) => {
        throw error;
      });

  return {
    formatOptionsToQueryString,
    formatQueryStringToOptions,
    getMovieList,
    getMovieByID
  };
};

export default movieService();
