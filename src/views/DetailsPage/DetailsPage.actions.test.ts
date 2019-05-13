import { MovieTypes } from "Types";
import detailsActionTypes, {
  fetchMovieById,
  errorHandler,
  movieListSuccessHandler
} from "./DetailsPage.actions";
import { toggleFetchStatus, fetchError } from "App/global.actions";

const mockMovie: MovieTypes.IMovie = {
  id: 1,
  title: "Movie in array",
  genres: ["genre1", "genre2"],
  poster: undefined,
  releaseDate: undefined,
  rating: 4
};

const responseObj = {
  json: (): { data: MovieTypes.IMovie[] } => ({
    data: [mockMovie]
  })
};

const mockError = new Error("test error");
const getMockFetch = (type: "resolve" | "reject") => {
  if (type === "resolve") {
    return jest.fn(() => Promise.resolve(responseObj));
  }
  return jest.fn(() => Promise.reject(mockError));
};

describe("DetailsPage... ", () => {
  describe("... fetchMovieById ...", () => {
    it("... dispatches query action", () => {
      (global as any).fetch = jest.fn(getMockFetch("resolve"));

      const mockDispatch = jest.fn();
      const queryAction = fetchMovieById(1)(mockDispatch);

      expect(queryAction).toEqual({
        type: detailsActionTypes.getMovieDetails
      });

      expect(mockDispatch).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(toggleFetchStatus(true));
    });

    it("... handles data response", () => {
      const mockDispatch = jest.fn();

      movieListSuccessHandler(mockDispatch, mockMovie)([mockMovie]);

      expect(mockDispatch).toHaveBeenCalledTimes(2);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: detailsActionTypes.getMovieDetailsResponse,
        payload: { movie: mockMovie, similar: [mockMovie] }
      });
      expect(mockDispatch).toHaveBeenNthCalledWith(2, toggleFetchStatus(false));
    });

    it("... handles errors", () => {
      (global as any).fetch = jest.fn(getMockFetch("reject"));
      const mockDispatch = jest.fn();

      errorHandler(mockDispatch)(mockError);

      expect(mockDispatch).toHaveBeenCalledTimes(2);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, fetchError(mockError));
      expect(mockDispatch).toHaveBeenNthCalledWith(2, toggleFetchStatus(false));
    });
  });
});
