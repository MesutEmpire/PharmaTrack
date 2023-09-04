import { Application, NextFunction } from "express";
const express = require("express");
const app: Application = express();
const cors = require("cors");
const router = require("./router/Router");
const { socket } = require("./router/Socket");
const httpServer = require("http").Server(app);
require("dotenv").config();
const cookieParser = require("cookie-parser");

//middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use((req: any, res: any, next: NextFunction) => {
  console.log(`${req.method} ------> ${req.url} at ${new Date().toString()}`);
  next();
});

// routing
app.use("/api", router);
socket(httpServer);

httpServer.listen(process.env.PORT || 2000, () => {
  console.log(`Listening to Port : ${process.env.PORT || 2000}`);
});
