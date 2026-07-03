import express from "express";
import { createNotice, getNotices } from "../controllers/noticeController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.post("/", protect, adminOnly, createNotice);

router.get("/", protect, getNotices);

export default router;