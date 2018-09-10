import { greet } from "./util";
import * as express from "express";

greet("new app");

const app = express();
app.get("/", (req, res, next) => {
  greet(req.query.name || "world");
  res.send("Hello !");
});

app.listen(3000);
