import upload from "../middlewares/uploadMiddleware.js";
import express from "express";
import {
    createComplaint,
    getMyComplaints,
    getAllComplaints,
    updateComplaint,
    getComplaintHistory
} from "../controllers/complaintController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.post(
    "/",
    protect,
    upload.single("photo"),
    createComplaint
);

router.get("/my", protect, getMyComplaints);

router.get("/all", protect, adminOnly, getAllComplaints);

router.put("/:id", protect, adminOnly, updateComplaint);

router.get("/history/:id", protect, getComplaintHistory);

export default router;