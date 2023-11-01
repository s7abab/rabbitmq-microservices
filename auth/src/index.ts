import express from "express";
import authRoute from "./routes/user.route";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

import connectDb from "./db";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there!");
});

app.use("/api/auth", authRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!!!!!!!!`);
  connectDb();
});
