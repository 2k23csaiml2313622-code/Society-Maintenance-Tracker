import { Link } from "react-router-dom";

const ResidentDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">
                Welcome, {user?.name}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                <Link
                    to="/resident/create"
                    className="bg-blue-600 text-white rounded-lg p-6 text-center hover:bg-blue-700"
                >
                    Raise Complaint
                </Link>

                <Link
                    to="/resident/my"
                    className="bg-green-600 text-white rounded-lg p-6 text-center hover:bg-green-700"
                >
                    My Complaints
                </Link>

                <Link
                    to="/resident/notices"
                    className="bg-orange-500 text-white rounded-lg p-6 text-center hover:bg-orange-600"
                >
                    Notices
                </Link>

                <Link
                    to="/resident/profile"
                    className="bg-purple-600 text-white rounded-lg p-6 text-center hover:bg-purple-700"
                >
                    Profile
                </Link>

            </div>
        </div>
    );
};

export default ResidentDashboard;