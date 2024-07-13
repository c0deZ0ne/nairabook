import express, { Router, Request, Response } from "express";

const errorHandle = (error: any, req: Request, res: Response, next: any) => {
  if (error) {
    if (error.code == 404) {
      res.render("404");
    } else if (error.code == 401) {
      return res.status(401).redirect("/auth/login");
    } else if (error.code) {
      res.status(error.code).json({ code: error.code, message: error.message });
    } else {
      res.status(error.code ?? 500).json({
        code: error.code ?? 500,
        message: error.message ?? "Unknown error occurred",
      });
    }
  }
};
export default errorHandle;
