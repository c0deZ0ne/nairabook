import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export default function authmiddleware(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  // get the token from the request and verify it then send status to the next
  try {
    let auth = req.headers["authorization"];
    if (auth == null || auth == undefined)
      throw { code: 403, message: "not authenticated" };
    let token = String(auth).split("Bearer ")[1];
    jwt.verify(
      token,
      process.env.SECRETEKEY_TOKEN_KEY || "secrete",
      (err: any, user: any) => {
        if (user) {
          req.user = user;
          next();
        } else {
          throw { code: 403, message: "unAuthorized user" };
        }
      }
    );
  } catch (error) {
    console.log(error)
    next(error);
  }
}
