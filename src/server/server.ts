// imports
import * as express from "express";
import movieService from "Services/movieService";
import renderAppToString from "./appRenderer";
import "isomorphic-fetch";
// app imports
import { MovieTypes, StateTypes } from "Types";
import { store } from "./../StoreProviderWrapper";
import searchActionTypes from "Views/SearchPage/SearchPage.actions";
import detailsActionTypes from "Views/DetailsPage/DetailsPage.actions";
import { Store, AnyAction } from "redux";

type detailsPayloadType = {
  movie: MovieTypes.IMovie;
  similar: MovieTypes.IMovie[];
};
type StoreType = Store<StateTypes.applicationState, AnyAction>;

type sendFunctionType = (s: string) => void;
type handleErrorType = (send: sendFunctionType) => (error: Error) => void;
const handleError: handleErrorType = send => error => {
  send(renderAppToString({ store: undefined, location: "/404" }));
};

type storeDispatchReturnType = (type: string, payload: Object) => StoreType;
type storeDispatchType = (store: StoreType) => storeDispatchReturnType;
const storeDispatch: storeDispatchType = store => (type, payload) => {
  store.dispatch({ type, payload });

  return store;
};

type middlewareType = (req: express.Request, res: express.Response) => void;
type templateMiddlewareType = (
  dispatch: storeDispatchReturnType,
  handleError: handleErrorType
) => middlewareType;

const rootPathMiddleware: templateMiddlewareType = (dispatch, handleError) => (
  req,
  res
) => {
  movieService
    .getMovieList({ search: "", ...req.query })
    .then(
      (result: MovieTypes.IMovie[]): StoreType =>
        dispatch(searchActionTypes.getMovieListResponse, result)
    )
    .then((modifiedStore: StoreType) => {
      res.send(
        renderAppToString({ store: modifiedStore, location: req.baseUrl })
      );
    })
    .catch(handleError);
};

// todo: fix a promise in a promise call
const detailsMiddleware: templateMiddlewareType = (
  dispatch,
  handleError
) => (req, res) => {
  movieService
    .getMovieByID(req.params.id)
    .then(
      (movie: MovieTypes.IMovie): Promise<any> => {
        return movieService
          .getMovieList({
            search: movie.genres ? movie.genres[0] : "",
            searchBy: "genres"
          })
          .then(similar => ({
            movie,
            similar
          }))
          .then(
            (payload: detailsPayloadType): StoreType =>
              dispatch(detailsActionTypes.getMovieDetailsResponse, payload)
          )
          .then(
            (store: StoreType): void => {
              res.send(renderAppToString({ store, location: req.baseUrl }));
            }
          )
          .catch(handleError);
      }
    )
    .catch(handleError);
};

const app = express();

app.use(express.static("dist"));
app.use("/movie/:id", detailsMiddleware(storeDispatch(store), handleError));
app.use("/", rootPathMiddleware(storeDispatch(store), handleError));

// run server
const port: string = process.env.PORT || "8080";
app.listen(port, () => console.log(`listening on :${port}`));

// exports
export { rootPathMiddleware, detailsMiddleware };
