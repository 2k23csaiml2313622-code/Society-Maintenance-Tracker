import { Link } from "react-router-dom";

const Sidebar = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="w-64 min-h-screen bg-blue-700 text-white p-6">
            <h2 className="text-3xl font-bold mb-8">
                Dashboard
            </h2>

            {user?.role === "resident" ? (
                <div className="flex flex-col gap-3">
                    <Link
                        to="/resident/dashboard"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/resident/create"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        Raise Complaint
                    </Link>

                    <Link
                        to="/resident/my"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        My Complaints
                    </Link>

                    <Link
                        to="/resident/notices"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        Notice Board
                    </Link>

                    <Link
                        to="/resident/profile"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        Profile
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    <Link
                        to="/admin/dashboard"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/admin/complaints"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        Manage Complaints
                    </Link>

                    <Link
                        to="/admin/notices"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        Create Notice
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Sidebar;