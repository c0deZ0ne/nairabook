// import { Request, Response } from "express";
// import database from "../../../database/Database";
// import { Validatetoken } from "../../../Utils/Token";
// import { IAuthcookie } from "../../../Interfaces/IAuth_Interface";
// import { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
// import IUser from "../../../Interfaces/User_interface";
// export async function getUser(
//   req: Request | any,
//   res: Response,
//   next: Function
// ) {
//   try {
//     let userCookie = req?.headers?.cookie ?? req?.headers?.authorization;
//   console.log("cookies",userCookie);
//   if (userCookie) {
//     //check if cookie is valid
//     let cookie = userCookie?.split("book_auto=")[1];
//     const cokieUser: IAuthcookie | JwtPayload | any = await Validatetoken(
//       cookie
//     );
//     // check if user is valid
//     console.log("cookies",cokieUser);

//     if (cokieUser) {
//       let user: IUser[] | null = await database.findById(cokieUser?._id);
//       if (user && user?.length > 0) {
//         req.user = user[0];
//         next();
//       } else {
//         req.user = null;
//         next();
//       }
//     }else{
//       req.user = null;
//       next();
//     }
//   } else {
//     req.user = null;
//     next();
//   }
//   } catch (error) {
    
//   }
  
// }


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
    const userCookie = req.headers.cookie?.split("book_auto=")[1] || req.headers.authorization;
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
