import mongoose from "mongoose";

const complaintHistorySchema = new mongoose.Schema(
    {
        complaint: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Complaint",
            required: true
        },
        actor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        status: {
            type: String,
            required: true
        },
        note: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("ComplaintHistory", complaintHistorySchema);