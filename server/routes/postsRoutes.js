import express from "express";
import { createPost, getAllPost, imgUpload } from "../controllers/postsControllers.js";

import fileUpload from "../utils/fileUpload.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPost);

router.post("/upload", fileUpload("./storage/images"), imgUpload);

export default router;