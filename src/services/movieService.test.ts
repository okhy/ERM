import movieService from "./movieService";
import { ResponseMovie, MovieTypes } from "Types";

const mockQuery: MovieTypes.MovieListQuery = {
  search: "test title",
  searchBy: "title",
  sortBy: "title"
};
const mockError = new Error("test error");

const mockResponseMovie: ResponseMovie = {
  id: 1,
  title: "Movie in array",
  tagline: "",
  genres: ["genre1", "genre2"],
  vote_average: 2,
  vote_count: 13142,
  release_date: "string",
  poster_path: "string",
  overview: "string",
  budget: 31998219,
  revenue: 12929731792763,
  runtime: 129
};

const mockResponseMovieList: ResponseMovie[] = [
  mockResponseMovie,
  {
    id: 3,
    title: "Movie in array 2",
    tagline: "",
    genres: ["genre3", "genre4"],
    vote_average: 2,
    vote_count: 13142,
    release_date: "string",
    poster_path: "string",
    overview: "string",
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
  poster: undefined,
  releaseDate: undefined
};

const mockMovieList: MovieTypes.IMovie[] = [
  mockMovie,
  {
    id: 3,
    title: "Movie in array 2",
    genres: ["genre3", "genre4"],
    rating: 3,
    poster: undefined,
    releaseDate: undefined
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
        json: () => ({
          data: mockResponseMovie
        })
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

    return movieService.getMovieByID("1").then((data: MovieTypes.IMovie) => {
      expect(data).toBeTruthy();
      expect(data).toEqual(mockMovie);
    });
  });

  it("... returns getMovie error", () => {
    (global as any).fetch = jest.fn(getMockFetch("reject"));

    return movieService.getMovieByID("1").catch((error: Error) => {
      expect(error).toBeTruthy();
      expect(error).toEqual(mockError);
    });
  });

  it.todo("... invokes (?) default error catch on error");
});
