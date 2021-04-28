import "./db.js";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video.js";
import "./models/Comment.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})