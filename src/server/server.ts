// imports
import * as express from "express";
import renderAppToString from "./appRenderer";
import { store } from "./../StoreProviderWrapper";

type templateMiddlewareType = (html: string) => (req: any, res: any) => void;
const templateMiddleware: templateMiddlewareType = html => (req, res) => {
  res.send(html);
};

const app = express();

app.use(express.static("dist"));
app.use("*", templateMiddleware(renderAppToString(store)));

// run server
const port: string = process.env.PORT || "8080";
app.listen(port, () => console.log(`listening on :${port}`));

// exports
export { templateMiddleware };
