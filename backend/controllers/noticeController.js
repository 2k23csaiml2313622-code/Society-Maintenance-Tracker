import Notice from "../models/Notice.js";

export const createNotice = async (req, res) => {
    try {
        console.log("User:", req.user);
        console.log("Body:", req.body);

        const notice = await Notice.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json(notice);

    } catch (error) {
        console.error("NOTICE ERROR:", error);

        res.status(500).json({
            message: error.message
        });
    }
};

export const getNotices = async (req, res) => {
    try {
        const notices = await Notice.find()
            .sort({ important: -1, createdAt: -1 });

        res.json(notices);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
};