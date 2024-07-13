var createError = require("http-errors");
import express, { Application, Request, response, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import * as dotenv from "dotenv";
import book_route from "./routes/bookRouts/book_routes";
import errorHandle from "./controller/error-controller/error";
import Error from "./routes/error/ErrorRoute";
import User_route from "./routes/UserRoute/User_rote";
import auth_route from "./routes/authRoute/auth_route";
import cors from "cors";
import database from "./database/Database";
import { Validatetoken } from "./Utils/Token";
import { getUser } from "./controller/auth-controller/middleware/isAuthenticated";
dotenv.config();

var app: Application = express();
// view engine setup
app.set("views", path.join(process.cwd(), "./src/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), "./src/public")));
app.use(cors());

//routes

var isAth = false;
app.use("/user/book", book_route);
app.use("/user", User_route);
app.use("/api/Auth", auth_route);

app.get("/", async (req: Request | any, res, next) => {
  let data = await database.get_all_books();
  res.render("home", { data, user: req.user });
});

app.use(Error);
app.use(errorHandle);

app.listen(process.env.PORT, () =>
  console.log(`app running on port ${process.env.PORT}`)
);
