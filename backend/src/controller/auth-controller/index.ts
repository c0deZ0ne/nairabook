
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { GenPassword, validatePassword } from "../../Utils/passwordUtils";
import database from "../../database/Database";
import generateUid from "../../Utils/GenUid";
import IUser from "../../Interfaces/User_interface";
import { Gentoken } from "../../Utils/Token";

dotenv.config();

// Register
export const _Register = async (req: Request|any, res: Response, next: NextFunction) => {
  if (req.method === "GET") {
    if (!req.user) {
      return res.render("register");
    }
    return res.redirect("/user/dashboard");
  }

  try {
    const { email, password } = req.body;
    const existingUser = await database.findByEmail(email);

    if (existingUser) {
      return next({ code: 403, message: "User already exists" });
    }

    // Joi validation (to-do)
    const _id = new  generateUid().gen();
    const hashedPassword = await GenPassword(password || "password");

    const newUser = {
      ...req.body,
      _id,
      password: hashedPassword,
      Courses: [],
    };

    const token = await Gentoken({ email, _id });
    const createdUser = await database.create(newUser);

    if (createdUser) {
      res.setHeader("Set-Cookie", `book_auto=${token}`);
      req.headers.authorization = token;
      return res.status(201).json({
        code: 201,
        message: "User created successfully",
        token,
      });
    }

    throw { code: 400, message: "Error occurred during user creation" };
  } catch (error) {
    next(error);
  }
};

// Login
export const _Login = async (req: Request|any, res: Response, next: NextFunction) => {


  try {
    const { username, password } = req.body;
    const user = await database.findByEmail(username);

    if (!user || user.length === 0) {
      return next({ code: 400, message: "Email or password is incorrect" });
    }

    const isValidPassword = await validatePassword({ email:username, password });

    if (!isValidPassword) {
      return next({ code: 400, message: "Email or password is incorrect" });
    }

    req.user = user[0];
    const token = await Gentoken({ email:username, _id: user[0]._id });

    res.cookie("book_auto", token);
    req.headers.authorization = `Bearer ${token}`;

    return res.status(200).json({
      code: 200,
      message: "Login successful",
      data:{
        ...user[0],
        accessToken: token,
        isChangePasswordRequired:false
      }
     
    });
  } catch (error) {
    next(error);
  }
};

// Logout
export const _Logout = (req: Request, res: Response, next: NextFunction) => {
  req.headers.cookie = "";
  res.clearCookie("book_auto");
  res.setHeader("Authorization", "");
  req.headers.authorization = "";
  res.json({status:200,message:"logout Successful",data:null })
};
