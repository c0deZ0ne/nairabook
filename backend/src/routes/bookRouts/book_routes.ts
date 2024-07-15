import * as express from "express";
import authmiddleware from "../../controller/auth-controller/middleware/authenticateToken";
import { getUser } from "../../controller/auth-controller/middleware/isAuthenticated";

import {
  _create_book,
  _get_all_books,
  _update_book,
  _delete_book,
} from "../../controller/Book-controller/index";

const book_route = express.Router();

book_route.get("/", _get_all_books); //done

book_route.post("/create", authmiddleware, _create_book); //done

book_route.patch("/update/:bookId", authmiddleware, _update_book); //update a book

book_route.post("/delete/:bookId", authmiddleware, _delete_book); // delete a book

book_route.get("/*", (req, res, next) => {
  try {
    throw " end of book route";
  } catch (error) {
    next(error);
  }
});

export default book_route;
