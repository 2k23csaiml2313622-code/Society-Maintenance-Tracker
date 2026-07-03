import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
    {
        resident: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        category: {
            type: String,
            enum: [
                "Electricity",
                "Water",
                "Plumbing",
                "Cleaning",
                "Security",
                "Lift",
                "Parking",
                "Other"
            ],
            required: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        photo: {
            type: String,
            default: null
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Low"
        },
        status: {
            type: String,
            enum: ["Open", "In Progress", "Resolved"],
            default: "Open"
        },
        isOverdue: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Complaint", complaintSchema);