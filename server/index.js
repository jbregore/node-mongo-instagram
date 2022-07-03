import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//router
import postsRoutes from "./routes/postsRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: "30mb", extended: true}));
app.use(cors());

app.use("/posts", express.static("storage/images"), postsRoutes);
app.use("/", authRoutes);

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}` )))
    .catch((error) => console.log(error.message));


