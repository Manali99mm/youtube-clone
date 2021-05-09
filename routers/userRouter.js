import express from "express";
import { changePassword, editProfile, userDetail } from "../controllers/userController.js";
import { onlyPrivate } from "../middlewares.js";
import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile)
userRouter.get(routes.changePassword, onlyPrivate, changePassword)
userRouter.get(routes.userDetail(), userDetail)

export default userRouter;