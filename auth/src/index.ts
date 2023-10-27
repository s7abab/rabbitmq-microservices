import express from "express";
import { json } from "body-parser";
import authRoute from './routes/user.route'
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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!!!!!!!!`);
  connectDb()
});
