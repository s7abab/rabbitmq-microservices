import express from "express";
import { json } from "body-parser";
import authRoute from './routes/authRoute'
import cookieParser from "cookie-parser";

const app = express();

import connectDb from "./db";

app.use(json());
app.use(cookieParser());

app.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there!");
});

app.use("/api/auth",authRoute)

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!!!!");
  connectDb()
});
