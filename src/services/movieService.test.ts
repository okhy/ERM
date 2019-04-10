import movieService from "./movieService";
import { MovieListQuery, IMovie } from "Types";

describe("movieService...", () => {
  it("... gets movieList by query", async () => {
    const mockQuery: MovieListQuery = {
      search: "test title",
      searchBy: "title",
      sortBy: "desc"
    };
    const mockMovieList: IMovie[] = [
      {
        id: 1,
        title: "Movie in array"
      }
    ];
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => ({ data: mockMovieList })
      })
    );
    (global as any).fetch = jest.fn(mockFetch);

    const result = await movieService.getMovies(mockQuery);

    expect(result).toBeTruthy();
    expect(result).toEqual(mockMovieList);
  });

  it("... returns an error", async () => {
    const mockQuery: MovieListQuery = {
      search: "test title",
      searchBy: "title",
      sortBy: "desc"
    };
    const mockError = new Error("test error");
    const mockFetch = jest.fn(() => Promise.reject(mockError));
    (global as any).fetch = jest.fn(mockFetch);

    const result = await movieService.getMovies(mockQuery);

    expect(result).toBeTruthy();
    expect(result).toEqual(mockError);
  });
  it("... gets movie by id", async () => {
    const mockMovie: IMovie = {
      id: 2,
      title: "Single Movie"
    };
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => mockMovie
      })
    );
    (global as any).fetch = jest.fn(mockFetch);

    const result = await movieService.getMovie("1");
    expect(result).toBeTruthy();
    expect(result).toEqual(mockMovie);
  });
});
