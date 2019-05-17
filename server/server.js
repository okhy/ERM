// imports
import express from "express";

const app = express();

app.get("/", async (req, res, next) => {
    if (process.env.mode === "development") res.send(`<!doctype html>${html}`); {

    }
    else {
        app.use(express.static("./../../dist"));
    }
});

app.use(require('../src/'))
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on :${port}`));
