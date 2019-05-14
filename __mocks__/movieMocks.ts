import { MovieTypes, ResponseMovie } from "Types";

export const mockError = new Error("test error");

export const mockMovie: MovieTypes.IMovie = {
  id: 1,
  title: "Pulp Fiction",
  poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  releaseDate: "1994-09-10",
  genres: ["Thriller", "Crime"],
  rating: 8,
  runtime: 154,
  overview:
    "A burger- loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time."
};

export const mockMovieList: MovieTypes.IMovie[] = [
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

export const mockResponseMovie: ResponseMovie = {
  id: 1,
  vote_average: 8,
  title: "Pulp Fiction",
  poster_path: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  release_date: "1994-09-10",
  genres: ["Thriller", "Crime"],
  runtime: 154,
  overview:
    "A burger- loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time."
};

export const mockResponseMovieList: ResponseMovie[] = [
  mockResponseMovie,
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

export const mockQuery: MovieTypes.MovieListQuery = {
  search: "test title",
  searchBy: "title",
  sortBy: "title"
};

export const getMockFetch = (
  type: "resolve" | "reject" | "resolveSingle"
): any => {
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
