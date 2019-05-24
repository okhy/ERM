// imports
import * as express from "express";
import { renderedTemplate } from "./renderTemplate";

type templateMiddlewareType = (html: string) => (req: any, res: any) => void;
const templateMiddleware: templateMiddlewareType = html => (req, res) => {
  res.send(html);
};
export { templateMiddleware };

const app = express();
app.use(templateMiddleware(renderedTemplate));
app.use(express.static("dist"));

// run server
const port: string = process.env.PORT || "8080";
app.listen(port, () => console.log(`listening on :${port}`));
