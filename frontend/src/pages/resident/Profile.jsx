const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">

            <h1 className="text-3xl font-bold mb-8">
                My Profile
            </h1>

            <div className="space-y-6">

                <div>
                    <label className="font-semibold text-gray-600">
                        Name
                    </label>

                    <div className="mt-2 p-3 border rounded-lg bg-gray-50">
                        {user?.name}
                    </div>
                </div>

                <div>
                    <label className="font-semibold text-gray-600">
                        Email
                    </label>

                    <div className="mt-2 p-3 border rounded-lg bg-gray-50">
                        {user?.email}
                    </div>
                </div>

                <div>
                    <label className="font-semibold text-gray-600">
                        Flat Number
                    </label>

                    <div className="mt-2 p-3 border rounded-lg bg-gray-50">
                        {user?.flatNumber || "Not Available"}
                    </div>
                </div>

                <div>
                    <label className="font-semibold text-gray-600">
                        Role
                    </label>

                    <div className="mt-2 p-3 border rounded-lg bg-gray-50 capitalize">
                        {user?.role}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Profile;