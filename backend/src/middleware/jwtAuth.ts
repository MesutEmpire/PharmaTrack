import { NextFunction, Request, Response } from "express";

require("dotenv").config();
const jwt = require("jsonwebtoken");

const maxAge = 60 * 60;
const createUserToken = (id: any) => {
  return jwt.sign({ id }, `${process.env.SECRET_KEY}`, {
    expiresIn: maxAge,
  });
};
const createAdminToken = (id: any, email: any) => {
  return jwt.sign({ id, email }, `${process.env.SECRET_ADMIN_KEY}`, {
    expiresIn: maxAge,
  });
};

const authCode = (
  res: Response,
  next: NextFunction,
  token: any,
  secretKey: any
) => {
  try {
    if (token) {
      jwt.verify(token, `${secretKey}`, (err: any, decodedToken: any) => {
        if (err) {
          res.status(403).json("Access Expired : ");
        } else {
          console.log(decodedToken);
          next();
        }
      });
    } else {
      res.status(403).json("Access Denied");
    }
  } catch (err: any) {
    res.status(500).json(" Internal Server ErrorComponent");
  }
};

const requireUserAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.userToken;
  authCode(res, next, token, process.env.SECRET_KEY);
};
const requireAdminAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.adminToken;
  authCode(res, next, token, process.env.SECRET_ADMIN_KEY);
};

module.exports = {
  createUserToken,
  createAdminToken,
  maxAge,
  requireUserAuth,
  requireAdminAuth,
};
