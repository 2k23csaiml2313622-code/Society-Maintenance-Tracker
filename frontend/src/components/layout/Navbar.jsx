import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="bg-white shadow px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">
                Society Maintenance Tracker
            </h1>

            <div className="flex items-center gap-6">
                <span className="font-medium">
                    {user?.name}
                </span>

                <button
                    onClick={logout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;