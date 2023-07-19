import express from "express";
import { add } from "./util";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const result = add(2, 4);
  res.send(`Hello World!, result is ${result}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
