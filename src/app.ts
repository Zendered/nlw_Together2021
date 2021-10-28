import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
const app = express();

import { router } from "./routes/routes";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use(router);

//Error middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ err: err.message });
  }

  return res.status(500).json({
    status: "error",
    err: "Internal Server Error!",
  });
});

app.listen(3001, () => console.log("server ON!"));
