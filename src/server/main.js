import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello This is server backend");
});

import matchRouter from "./routes/match.js";

app.use("/api/v1/match", matchRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

