import express from "express";
import { json } from "body-parser";
import authRoute from './routes/authRoute'
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express();

import connectDb from "./db";

app.use(json());
app.use(cookieParser());
app.use(cors());

app.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there!");
});

app.use("/api/auth",authRoute)

app.listen(3001, () => {
  console.log("Listening on port 3001!!!!!!!!");
  connectDb()
});
