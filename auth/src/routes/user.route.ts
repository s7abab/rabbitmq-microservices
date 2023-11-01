import express from "express";
import {
  currentUserInfo,
  loginUser,
  registerUser,
  signout,
} from "../controllers/user.controller";
import { currentUser } from "@s7adev/common";
import { requireAuth } from "@s7adev/common";

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/currentUser", currentUser, requireAuth, currentUserInfo);

userRouter.post("/signOut", currentUser, requireAuth, signout);

export default userRouter;
