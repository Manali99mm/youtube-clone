import "./db.js";
import dotenv from "dotenv";
import app from "./app.js";
import "./models/Video.js";
import "./models/Comment.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})