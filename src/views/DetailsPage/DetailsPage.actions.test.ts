import { MovieTypes } from "Types";
import detailsActionTypes, { fetchMovieById } from "./DetailsPage.actions";
import { toggleFetchStatus, fetchError } from "App/global.actions";

const responseObj = {
  json: (): { data: MovieTypes.IMovie[] } => ({
    data: [
      {
        id: 1,
        title: "Movie in array",
        genres: ["genre1", "genre2"],
        poster: undefined,
        releaseDate: undefined,
        rating: 4
      }
    ]
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
  describe("... fetchMovieById tests ...", () => {
    it("... dispatches query action", () => {
      (global as any).fetch = jest.fn(getMockFetch("resolve"));

      const mockDispatch = jest.fn();
      const queryAction = fetchMovieById("testId")(mockDispatch);

      expect(queryAction).toEqual({
        type: detailsActionTypes.getMovieDetails
      });

      expect(mockDispatch).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(toggleFetchStatus(true));
    });

    it("... dispatches response action", () => {
      (global as any).fetch = jest.fn(getMockFetch("resolve"));

      const mockDispatch = jest.fn();
      const mockResponse = {};

      fetchMovieById("testId")(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledTimes(3);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, toggleFetchStatus(true));
      expect(mockDispatch).toHaveBeenNthCalledWith(2, mockResponse);
      expect(mockDispatch).toHaveBeenNthCalledWith(3, toggleFetchStatus(false));
    });

    it("... dispatches error action", () => {
      (global as any).fetch = jest.fn(getMockFetch("reject"));
      const mockDispatch = jest.fn();

      fetchMovieById("testId")(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledTimes(3);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, toggleFetchStatus(true));
      expect(mockDispatch).toHaveBeenNthCalledWith(2, fetchError(mockError));
      expect(mockDispatch).toHaveBeenNthCalledWith(3, toggleFetchStatus(false));
    });
  });
});
