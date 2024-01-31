import express from "express";
import apiRouter from "./api/routes/api.router";
import reviewRouter from "./api/routes/review.router";
import loginRouter from "./api/routes/login.router";
import musicRouter from "./api/routes/music.router";
import authRouter from "./api/routes/auth.router";
import {
  handle404,
  handleCustomError,
  handlePsqlErrors,
  handleServerErrors,
} from "./errors";
import searchRouter from "./api/routes/search.router";
import cors from "cors"


const app = express();

app.use(cors())

app.use(express.json());

app.use("/api", apiRouter);
app.use("/api/music", musicRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/spotify", loginRouter);
app.use("/api/search", searchRouter);
app.use("/api/auth", authRouter);

app.all("*", handle404);

app.use(handlePsqlErrors);
app.use(handleCustomError);
app.use(handleServerErrors);


export default app;
