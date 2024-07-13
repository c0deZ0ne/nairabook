import express, { Request, Response } from "express";
import {
  _Login,
  _Logout,
  _Register,
} from "../../controller/auth-controller/index";
import { getUser } from "../../controller/auth-controller/middleware/isAuthenticated";
const auth_route = express.Router();

auth_route.get("/", (req, res, next) => {
  res.render("home");
});

auth_route.get("/register", getUser, _Register);

auth_route.get("/login", getUser, _Login);

auth_route.get("/logout", _Logout);

auth_route.post("/register", _Register);

auth_route.post("/login", _Login);

auth_route.get("/*", (req, res, next) => {
  try {
    throw " end of auth route";
  } catch (error) {
    next(error);
  }
});

export default auth_route;
