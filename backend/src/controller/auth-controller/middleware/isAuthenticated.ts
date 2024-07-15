
import { Request, Response, NextFunction } from "express";
import database from "../../../database/Database";
import { Validatetoken } from "../../../Utils/Token";
import { IAuthcookie } from "../../../Interfaces/IAuth_Interface";
import { JwtPayload } from "jsonwebtoken";
import IUser from "../../../Interfaces/User_interface";

export async function getUser(
  req: Request | any,
  res: Response,
  next: NextFunction
) {  try {
    const userCookie = req.headers.authorization?.split("Bearer ")[1] || req.headers.authorization;
    if (!userCookie) {
      req.user = null;
      throw {code:403,message:"Please login"}
    }

    const cookieUser: IAuthcookie | JwtPayload | any = await Validatetoken(userCookie);
    if (!cookieUser) {
      req.user = null;
      throw {code:403,message:"Please login"}
    }
    const user: IUser[] | null = await database.findById(cookieUser._id);
    req.user = user && user.length > 0 ? user[0] : null;
  } catch (error) {
    next(error)
  }
}
