import { useEffect, useState } from "react";
import {
    getAllComplaints,
    updateComplaint
} from "../../services/adminService";
import { toast } from "react-toastify";

const ManageComplaints = () => {

    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComplaints();
    }, []);

    const fetchComplaints = async () => {
        try {
            const data = await getAllComplaints();
            setComplaints(data);
        } catch (err) {
            console.error(err);
            toast.error("Failed to load complaints");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (id, field, value) => {

        try {

            const complaint = complaints.find(c => c._id === id);

            await updateComplaint(id, {
                status:
                    field === "status"
                        ? value
                        : complaint.status,

                priority:
                    field === "priority"
                        ? value
                        : complaint.priority,

                note: "Updated by Admin"
            });

            toast.success("Complaint Updated");

            fetchComplaints();

        } catch (err) {
            console.error(err);
            toast.error("Update Failed");
        }

    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>

            <h1 className="text-3xl font-bold mb-6">
                Manage Complaints
            </h1>

            <div className="overflow-x-auto">

                <table className="min-w-full bg-white shadow rounded-lg">

                    <thead className="bg-blue-600 text-white">

                        <tr>
                            <th className="p-3">Resident</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Priority</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Photo</th>
                        </tr>

                    </thead>

                    <tbody>

                        {complaints.map((item) => (

                            <tr
                                key={item._id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {item.resident?.name}
                                </td>

                                <td className="p-3">
                                    {item.category}
                                </td>

                                <td className="p-3">

                                    <select
                                        value={item.priority}
                                        onChange={(e) =>
                                            handleUpdate(
                                                item._id,
                                                "priority",
                                                e.target.value
                                            )
                                        }
                                        className="border rounded p-2"
                                    >
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>

                                </td>

                                <td className="p-3">

                                    <select
                                        value={item.status}
                                        onChange={(e) =>
                                            handleUpdate(
                                                item._id,
                                                "status",
                                                e.target.value
                                            )
                                        }
                                        className="border rounded p-2"
                                    >
                                        <option>Open</option>
                                        <option>In Progress</option>
                                        <option>Resolved</option>
                                    </select>

                                </td>

                                <td className="p-3">

                                    {item.photo ? (
                                        <img
                                            src={item.photo}
                                            alt="Complaint"
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                    ) : (
                                        "-"
                                    )}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default ManageComplaints;