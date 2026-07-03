import { useEffect, useState } from "react";
import { getMyComplaints } from "../../services/complaintService";

const MyComplaints = () => {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComplaints();
    }, []);

    const fetchComplaints = async () => {
        try {
            const data = await getMyComplaints();
            setComplaints(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h2 className="text-xl">Loading...</h2>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                My Complaints
            </h1>

            {complaints.length === 0 ? (
                <p>No complaints found.</p>
            ) : (
                <div className="grid gap-5">
                    {complaints.map((complaint) => (
                        <div
                            key={complaint._id}
                            className="border rounded-lg p-5 shadow bg-white"
                        >
                            <div className="flex justify-between mb-2">
                                <h2 className="font-bold text-lg">
                                    {complaint.category}
                                </h2>

                                <span className="bg-blue-100 px-3 py-1 rounded">
                                    {complaint.status}
                                </span>
                            </div>

                            <p className="mb-3">
                                {complaint.description}
                            </p>

                            <p>
                                <strong>Priority:</strong>{" "}
                                {complaint.priority}
                            </p>

                            {complaint.photo && (
                                <img
                                    src={complaint.photo}
                                    alt="Complaint"
                                    className="w-48 mt-4 rounded"
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyComplaints;