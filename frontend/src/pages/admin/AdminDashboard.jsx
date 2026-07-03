import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboardService";

const AdminDashboard = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const data = await getDashboard();
            setStats(data);
        } catch (err) {
            console.error(err);
        }
    };

    if (!stats) {
        return <h2 className="text-xl">Loading...</h2>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Admin Dashboard
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

                <div className="bg-blue-600 text-white rounded-lg p-5">
                    <h3>Total</h3>
                    <p className="text-3xl">{stats.total}</p>
                </div>

                <div className="bg-yellow-500 text-white rounded-lg p-5">
                    <h3>Open</h3>
                    <p className="text-3xl">{stats.open}</p>
                </div>

                <div className="bg-purple-600 text-white rounded-lg p-5">
                    <h3>In Progress</h3>
                    <p className="text-3xl">{stats.progress}</p>
                </div>

                <div className="bg-green-600 text-white rounded-lg p-5">
                    <h3>Resolved</h3>
                    <p className="text-3xl">{stats.resolved}</p>
                </div>

                <div className="bg-red-600 text-white rounded-lg p-5">
                    <h3>Overdue</h3>
                    <p className="text-3xl">{stats.overdue}</p>
                </div>

            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">
                    Complaints by Category
                </h2>

                <div className="space-y-3">

                    {stats.categoryWise.map((item) => (
                        <div
                            key={item._id}
                            className="flex justify-between bg-white shadow rounded-lg p-4"
                        >
                            <span>{item._id}</span>
                            <span>{item.count}</span>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;