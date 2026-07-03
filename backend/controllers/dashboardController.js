import Complaint from "../models/Complaint.js";

export const getDashboard = async (req, res) => {
    try {
        const total = await Complaint.countDocuments();

        const open = await Complaint.countDocuments({
            status: "Open"
        });

        const progress = await Complaint.countDocuments({
            status: "In Progress"
        });

        const resolved = await Complaint.countDocuments({
            status: "Resolved"
        });

        const overdue = await Complaint.countDocuments({
            isOverdue: true
        });

        const categoryWise = await Complaint.aggregate([
            {
                $group: {
                    _id: "$category",
                    count: {
                        $sum: 1
                    }
                }
            }
        ]);

        res.json({
            total,
            open,
            progress,
            resolved,
            overdue,
            categoryWise
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};