import express from "express";
import { getJoin, getLogin, logout, postJoin, postLogin } from "../controllers/userController.js";
import { home, search } from "../controllers/videoController.js";
import routes from "../routes.js";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;