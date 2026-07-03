import express from "express";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, (req, res) => {
    res.json({
        message: "Protected Route",
        user: req.user
    });
});

export default router;