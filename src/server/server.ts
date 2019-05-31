// imports
import * as express from "express";
import movieService from "Services/movieService";
import renderAppToString from "./appRenderer";
import "isomorphic-fetch";
// app imports
import { MovieTypes } from "Types";
import { store } from "./../StoreProviderWrapper";
import searchActionTypes from "Views/SearchPage/SearchPage.actions";

type templateMiddlewareType = (store: any) => (req: any, res: any) => void;
const templateMiddleware: templateMiddlewareType = store => (req, res) => {
  movieService
    .getMovieList({ search: "" })
    .then((result: MovieTypes.IMovie[]) => {
      console.log("andrzej");
      store.dispatch({
        type: searchActionTypes.getMovieListResponse,
        payload: result
      });
      return store;
    })
    .then(() => {
      console.log('store w następnym then: ', store.getState());

      res.send(renderAppToString(store));
    });
};

const app = express();

app.use(express.static("dist"));
app.use("*", templateMiddleware(store));

// run server
const port: string = process.env.PORT || "8080";
app.listen(port, () => console.log(`listening on :${port}`));

// exports
export { templateMiddleware };
