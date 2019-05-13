import movieService, { transformResponseMovie } from "./movieService";
import { ResponseMovie, MovieTypes } from "Types";

const mockQuery: MovieTypes.MovieListQuery = {
  search: "test title",
  searchBy: "title",
  sortBy: "title"
};
const mockError = new Error("test error");

const mockResponseMovieList: ResponseMovie[] = [
  {
    id: 1,
    vote_average: 4,
    title: "Movie in array",
    poster_path: "test poster path",
    release_date: "1923",
    genres: ["genre1", "genre2"],
    runtime: 129,
    overview: "overview"
  },
  {
    id: 3,
    title: "Movie in array 2",
    tagline: "",
    genres: ["genre3", "genre4"],
    vote_average: 3,
    vote_count: 13142,
    release_date: "1923",
    poster_path: "test poster path",
    overview: "overview",
    budget: 31998219,
    revenue: 12929731792763,
    runtime: 129
  }
];

const mockMovie: MovieTypes.IMovie = {
  id: 1,
  title: "Movie in array",
  genres: ["genre1", "genre2"],
  rating: 4,
  overview: "overview",
  poster: "test poster path",
  releaseDate: "1923",
  runtime: 129
};

const mockMovieList: MovieTypes.IMovie[] = [
  mockMovie,
  {
    id: 3,
    title: "Movie in array 2",
    genres: ["genre3", "genre4"],
    rating: 3,
    overview: "overview",
    poster: "test poster path",
    releaseDate: "1923",
    runtime: 129
  }
];

const getMockFetch = (type: "resolve" | "reject" | "resolveSingle"): any => {
  if (type === "resolve") {
    return jest.fn(() =>
      Promise.resolve({
        json: () => ({
          data: mockResponseMovieList
        })
      })
    );
  }
  if (type === "resolveSingle") {
    return jest.fn(() =>
      Promise.resolve({
        json: () => mockResponseMovieList[0]
      })
    );
  }
  return jest.fn(() => Promise.reject(mockError));
};

describe("movieService...", () => {
  it("... gets movieList by query", () => {
    (global as any).fetch = jest.fn(getMockFetch("resolve"));

    return movieService
      .getMovieList(mockQuery)
      .then((data: MovieTypes.IMovie[]) => {
        expect(data).toBeTruthy();
        expect(data).toEqual(mockMovieList);
      });
  });

  it("... returns an getMovies error", () => {
    (global as any).fetch = jest.fn(getMockFetch("reject"));

    return movieService.getMovieList(mockQuery).catch((error: Error) => {
      expect(error).toBeTruthy();
      expect(error).toEqual(mockError);
    });
  });

  it("... gets movie by id", () => {
    (global as any).fetch = jest.fn(getMockFetch("resolveSingle"));

    return movieService.getMovieByID(1).then((data: MovieTypes.IMovie) => {
      expect(data).toBeTruthy();
      expect(data).toEqual(mockMovie);
    });
  });

  it("... returns getMovie error", () => {
    (global as any).fetch = jest.fn(getMockFetch("reject"));

    return movieService.getMovieByID(1).catch((error: Error) => {
      expect(error).toBeTruthy();
      expect(error).toEqual(mockError);
    });
  });

  it("... transforms responseMovie correctly", () => {
    const result = transformResponseMovie(mockResponseMovieList[0]);
    expect(result).toEqual(mockMovie);
  });
  it("... transforms query to queryString correctly", () => {
    const result = movieService.formatQueryStringToOptions(
      "?search=test title&searchBy=title&sortBy=title"
    );
    expect(result).toEqual(mockQuery);
  });
});
