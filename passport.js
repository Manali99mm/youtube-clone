import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import { facebookLoginCallback, githubLoginCallback } from "./controllers/userController.js";
import User from "./models/User.js";
import routes from "./routes.js"

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallback}`
}, githubLoginCallback));

// passport.use(new FacebookStrategy({
//     clientID: process.env.FB_ID,
//     clientSecret: process.env.FB_SECRET,
//     callbackURL: `https://afraid-baboon-46.localtunnel.me${routes.facebookCallback}`,
//     profileFields: ["id", "displayName", "photos", "email"],
//     scope: ["public_profile", "email"]
// }, facebookLoginCallback));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
