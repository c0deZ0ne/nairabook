import express, { Request, Response } from "express";

import authmiddleware from "../../controller/auth-controller/middleware/authenticateToken";
import { getUser } from "../../controller/auth-controller/middleware/isAuthenticated";
import {
  _create_book,
  _delete_book,
  _update_book,
} from "../../controller/Book-controller";
import {
  _create_user,
  _get_all_users,
  _update_user,
} from "../../controller/User-controller/index";
import database from "../../database/Database";

import IUser from "../../Interfaces/User_interface";
const User_route = express.Router();

User_route.get("/", _get_all_users);

User_route.get("/dashboard", authmiddleware, async (req: any, res, next) => {
  const { email, _id } = req.user;

  let userDetails = await database.findById(req.user._id);
  if (userDetails) {
    let data = userDetails[0];
    res.render("dashboard", { data });
  } else {
    res.redirect("/auth/register");
  }
});

User_route.post("/create", _create_user);

User_route.patch("/book/update/:bookId", authmiddleware, getUser, _update_book); //update/book by user

//user actions
User_route.delete(
  "/book/delete/:bookId",
  authmiddleware,
  getUser,
  _delete_book
); // delete book by user

User_route.post("/book/create", authmiddleware, getUser, _create_book);

User_route.get("/test", (req, res) => {
  res.render("create-book");
});

User_route.get("/*", (req, res, next) => {
  try {
    throw " end of User route";
  } catch (error) {
    next(error);
  }
});

export default User_route;
