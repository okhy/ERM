import movieService, { transformResponseMovie } from "./movieService";
import { MovieTypes } from "Types";
// mocks
import {
  mockMovie,
  mockMovieList,
  mockResponseMovie,
  mockError,
  getMockFetch,
  mockQuery
} from "Mocks/movieMocks";

describe("movieService...", () => {
  it("... gets movieList by query", () => {
    const mockedMovieService = movieService(getMockFetch("resolve"));

    return mockedMovieService
      .getMovieList(mockQuery)
      .then((data: MovieTypes.IMovie[]) => {
        expect(data).toBeTruthy();
        expect(data).toEqual(mockMovieList);
      });
  });

  it("... returns an getMovies error", () => {
    const mockedMovieService = movieService(getMockFetch("resolve"));

    return mockedMovieService.getMovieList(mockQuery).catch((error: Error) => {
      expect(error).toBeTruthy();
      expect(error).toEqual(mockError);
    });
  });

  it("... gets movie by id", () => {
    const mockedMovieService = movieService(getMockFetch("resolveSingle"));

    return mockedMovieService
      .getMovieByID(1)
      .then((data: MovieTypes.IMovie) => {
        expect(data).toBeTruthy();
        expect(data).toEqual(mockMovie);
      });
  });

  it("... returns getMovie error", () => {
    const mockedMovieService = movieService(getMockFetch("resolve"));

    return mockedMovieService.getMovieByID(1).catch((error: Error) => {
      expect(error).toBeTruthy();
      expect(error).toEqual(mockError);
    });
  });

  it("... transforms responseMovie correctly", () => {
    const result = transformResponseMovie(mockResponseMovie);
    expect(result).toEqual(mockMovie);
  });
  it("... transforms query to queryString correctly", () => {
    const result = movieService(jest.fn()).formatQueryStringToOptions(
      "?search=test title&searchBy=title&sortBy=title"
    );
    expect(result).toEqual(mockQuery);
  });
});
