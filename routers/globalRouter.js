import express from "express";
import passport from "passport";
import { facebookLogin, getJoin, getLogin, getMe, githubLogin, logout, postFacebookLogin, postGithubLogin, postJoin, postLogin } from "../controllers/userController.js";
import { home, search } from "../controllers/videoController.js";
import { onlyPrivate, onlyPublic } from "../middlewares.js";
import routes from "../routes.js";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.github, githubLogin);

globalRouter.get(routes.githubCallback, passport.authenticate("github", { failureRedirect: '/login' }), postGithubLogin);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);

globalRouter.get(routes.facebookCallback, passport.authenticate('facebook', { failureRedirect: '/login' }), postFacebookLogin);

export default globalRouter;