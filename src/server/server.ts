// imports
import * as express from "express";
import movieService from "Services/movieService";
import renderAppToString from "./appRenderer";
import "isomorphic-fetch";
// app imports
import { MovieTypes } from "Types";
import { store } from "./../StoreProviderWrapper";
import searchActionTypes from "Views/SearchPage/SearchPage.actions";
// import detailsActionTypes from "Views/DetailsPage/DetailsPage.actions";

type templateMiddlewareType = (
  store: any
) => (req: express.Request, res: express.Response) => void;
const templateMiddleware: templateMiddlewareType = store => (req, res) => {
  const location = req.baseUrl;
  // if (location === "") {
  movieService
    .getMovieList({ search: "" })
    .then((result: MovieTypes.IMovie[]) => {
      store.dispatch({
        type: searchActionTypes.getMovieListResponse,
        payload: result
      });
      return store;
    })
    .then((store: any) => {
      res.send(renderAppToString({ store, location }));
    })
    .catch(error => {
      console.log(error);
    });
  // }
  // console.log(location.includes("/movie"));
  // if (location.includes("/movie")) {
  //   /// I am embarassed by that code...
  //   movieService
  //     .getMovieByID(+location.split("/")[2])
  //     .then((movie: MovieTypes.IMovie) => {
  //       console.log("firin request for: ", movie.title);

  //       movieService
  //         .getMovieList({
  //           search: movie.genres ? movie.genres[0] : "",
  //           searchBy: "genres"
  //         })
  //         .then((similar: MovieTypes.IMovie[]) => {
  //           console.log(`got ${similar.length} movies`);

  //           store.dispatch({
  //             type: detailsActionTypes.getMovieDetailsResponse,
  //             payload: { movie, similar }
  //           });

  //           console.log("state after dispatch: ", store.getState());

  //           return store;
  //         })
  //         .then((store: any) => {
  //           res.send(renderAppToString({ store, location }));
  //         });
  //     });
  // } else {
  //   res.send(renderAppToString({ store, location }));
  // }
};

const app = express();

app.use(express.static("dist"));
app.use("*", templateMiddleware(store));

// run server
const port: string = process.env.PORT || "8080";
app.listen(port, () => console.log(`listening on :${port}`));

// exports
export { templateMiddleware };
