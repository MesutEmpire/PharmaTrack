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
const resetPassToken = (data: any) => {
  return jwt.sign(data,`${process.env.LINK_SECRET_KEY}`, {
    expiresIn: 60*10,
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
          res.status(403).json("Access Expired");
        } else {
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

const requireResetPassAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  authCode(res, next, token, process.env.LINK_SECRET_KEY);
};

module.exports = {
  createUserToken,
  createAdminToken,
  resetPassToken,
  maxAge,
  requireUserAuth,
  requireAdminAuth,
  requireResetPassAuth
};
