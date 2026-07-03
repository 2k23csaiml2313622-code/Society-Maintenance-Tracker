import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1">
                <Navbar />

                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;