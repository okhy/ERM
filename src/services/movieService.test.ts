import movieService from "./movieService";
import { MovieTypes } from "Types";

const mockQuery: MovieTypes.MovieListQuery = {
  search: "test title",
  searchBy: "title",
  sortBy: "desc"
};
const mockError = new Error("test error");

const mockMovieList: MovieTypes.IMovie[] = [
  {
    id: 1,
    title: "Movie in array",
    genres: ["genre1", "genre2"],
    poster: undefined,
    releaseDate: undefined,
    rating: 4
  },
  {
    id: 3,
    title: "Movie in array 2",
    genres: ["genre3", "genre4"],
    poster: undefined,
    releaseDate: undefined,
    rating: 3
  }
];

const getMockFetch = (type: "resolve" | "reject") => {
  if (type === "resolve") {
    return jest.fn(() =>
      Promise.resolve({
        json: () => ({ data: mockMovieList })
      })
    );
  }
  return jest.fn(() => Promise.reject(mockError));
};

describe("movieService...", () => {
  it("... gets movieList by query", () => {
    (global as any).fetch = jest.fn(getMockFetch("resolve"));

    const successHandler = jest.fn();

    return movieService
      .getMovieList(mockQuery, () => {}, successHandler)
      .then(() => {
        expect(successHandler).toHaveBeenCalledWith(mockMovieList);
      });
  });

  it("... returns an getMovies error", () => {
    (global as any).fetch = jest.fn(getMockFetch("reject"));

    const errorHandler = jest.fn();

    return movieService.getMovieList(mockQuery, errorHandler).catch(() => {
      expect(errorHandler).toHaveBeenCalled();
    });
  });

  it("... gets movie by id", () => {
    (global as any).fetch = jest.fn(getMockFetch("resolve"));

    const successHandler = jest.fn();

    return movieService
      .getMovieByID("1", () => {}, successHandler)
      .then(() => {
        expect(successHandler).toHaveBeenCalled();
      });
  });

  it("... returns getMovie error", () => {
    (global as any).fetch = jest.fn(getMockFetch("reject"));

    const errorHandler = jest.fn();

    return movieService.getMovieByID("1", errorHandler).catch(() => {
      expect(errorHandler).toHaveBeenCalled();
    });
  });
});
