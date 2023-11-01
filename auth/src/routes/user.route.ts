import express from "express";
import {
  currentUserInfo,
  loginUser,
  registerUser,
  signout,
} from "../controllers/user.controller";
import { currentUser } from "../middlewares/current.user";
import { requireAuth } from "../middlewares/require.auth";

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/currentUser", currentUser, requireAuth, currentUserInfo);

userRouter.post("/signOut", currentUser, requireAuth, signout);

export default userRouter;
