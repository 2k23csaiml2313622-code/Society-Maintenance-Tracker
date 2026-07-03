import Complaint from "../models/Complaint.js";
import ComplaintHistory from "../models/ComplaintHistory.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

export const createComplaint = async (req, res) => {
    try {
        console.log("========== CREATE COMPLAINT ==========");
        console.log("Body:", req.body);
        console.log("File:", req.file);
        console.log("User:", req.user);

        const { category, description } = req.body;

        if (!category || !description) {
            return res.status(400).json({
                message: "Category and description are required"
            });
        }

        let photo = "";

        if (req.file) {
            console.log("Uploading image to Cloudinary...");
            photo = await uploadToCloudinary(req.file);
            console.log("Cloudinary URL:", photo);
        }

        const complaint = await Complaint.create({
            resident: req.user.id,
            category,
            description,
            photo
        });

        await ComplaintHistory.create({
            complaint: complaint._id,
            actor: req.user.id,
            status: "Open",
            note: "Complaint Created"
        });

        res.status(201).json({
            success: true,
            message: "Complaint Created Successfully",
            complaint
        });

    } catch (error) {
        console.error("========== COMPLAINT ERROR ==========");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getMyComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find({
            resident: req.user.id
        }).sort({
            createdAt: -1
        });

        res.status(200).json(complaints);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
};

export const getAllComplaints = async (req, res) => {
    try {

        const days = Number(process.env.OVERDUE_DAYS || 7);

        await Complaint.updateMany(
            {
                status: {
                    $ne: "Resolved"
                },
                createdAt: {
                    $lt: new Date(
                        Date.now() - days * 24 * 60 * 60 * 1000
                    )
                }
            },
            {
                isOverdue: true
            }
        );

        const filter = {};

        if (req.query.status)
            filter.status = req.query.status;

        if (req.query.priority)
            filter.priority = req.query.priority;

        if (req.query.category)
            filter.category = req.query.category;

        const complaints = await Complaint.find(filter)
            .populate(
                "resident",
                "name email flatNumber"
            )
            .sort({
                isOverdue: -1,
                createdAt: -1
            });

        res.status(200).json(complaints);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: error.message
        });

    }
};

export const updateComplaint = async (req, res) => {
    try {

        const { status, priority, note } = req.body;

        const complaint = await Complaint.findById(
            req.params.id
        );

        if (!complaint) {
            return res.status(404).json({
                message: "Complaint not found"
            });
        }

        if (complaint.status === "Resolved") {
            return res.status(400).json({
                message:
                    "Resolved complaints cannot be modified"
            });
        }

        if (status)
            complaint.status = status;

        if (priority)
            complaint.priority = priority;

        await complaint.save();

        await ComplaintHistory.create({
            complaint: complaint._id,
            actor: req.user.id,
            status: complaint.status,
            note: note || ""
        });

        res.status(200).json({
            message: "Complaint Updated",
            complaint
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: error.message
        });

    }
};

export const getComplaintHistory = async (req, res) => {
    try {

        const history = await ComplaintHistory.find({
            complaint: req.params.id
        })
            .populate("actor", "name role")
            .sort({
                createdAt: 1
            });

        res.status(200).json(history);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: error.message
        });

    }
};