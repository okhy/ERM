import movieService, { resultType } from "./movieService";
import { MovieListQuery, IMovie } from "Types";

const mockQuery: MovieListQuery = {
  search: "test title",
  searchBy: "title",
  sortBy: "desc"
};
const mockError = new Error("test error");

const mockMovie: IMovie = {
  id: 2,
  title: "Single Movie",
  genres: ["genre1", "genre2"],
  poster: undefined,
  releaseDate: undefined
};
const mockMovieList: IMovie[] = [
  {
    id: 1,
    title: "Movie in array",
    genres: ["genre1", "genre2"],
    poster: undefined,
    releaseDate: undefined
  },
  {
    id: 3,
    title: "Movie in array 2",
    genres: ["genre3", "genre4"],
    poster: undefined,
    releaseDate: undefined
  }
];

describe("movieService...", () => {
  it("... gets movieList by query", async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => ({ data: mockMovieList })
      })
    );
    (global as any).fetch = jest.fn(mockFetch);

    const result = await movieService
      .getMovieList(mockQuery)
      .then(result => result);

    expect(result).toBeTruthy();
    expect(result).toEqual(mockMovieList);
  });

  it("... returns an getMovies error", async () => {
    const mockFetch = jest.fn(() => Promise.reject(mockError));
    (global as any).fetch = jest.fn(mockFetch);

    const result = await movieService
      .getMovieList(mockQuery)
      .catch(error => error);

    expect(result).toEqual(mockError);
  });

  it("... gets movie by id", async () => {
    const mockResponse: resultType = {
      movie: mockMovie,
      similar: mockMovieList
    };
    const searchId = "1";
    const mockFetch = jest.fn((query: string) => {
      if (query.endsWith(searchId)) {
        return Promise.resolve({
          json: () => mockMovie
        });
      }
      return Promise.resolve({
        json: () => ({ data: mockMovieList })
      });
    });
    (global as any).fetch = jest.fn(mockFetch);

    const result = await movieService.getMovieByID(searchId);

    expect(result).toBeTruthy();
    expect(result).toEqual(mockResponse);
  });

  it("... returns getMovie error", async () => {
    const mockFetch = jest.fn(() => Promise.reject(mockError));

    (global as any).fetch = jest.fn(mockFetch);

    const result = await movieService.getMovieByID("1").catch(error => error);

    expect(result).toBeTruthy();
    expect(result).toEqual(mockError);
  });
});
