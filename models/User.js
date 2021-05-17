import mongoose from "mongoose";
import passportLocalMonngoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    githubId: Number,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    videos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }]
});

userSchema.plugin(passportLocalMonngoose, { usernameField: "email" });

const model = mongoose.model("User", userSchema);

export default model;