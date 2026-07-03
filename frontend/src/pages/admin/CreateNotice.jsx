import { useState } from "react";
import { toast } from "react-toastify";
import { createNotice } from "../../services/adminService";

const CreateNotice = () => {

    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            await createNotice(formData);

            toast.success("Notice Published Successfully");

            setFormData({
                title: "",
                description: ""
            });

        } catch (err) {
            console.error(err);
            toast.error("Failed to Publish Notice");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">

            <h1 className="text-3xl font-bold mb-6">
                Create Notice
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <input
                    type="text"
                    name="title"
                    placeholder="Notice Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    required
                />

                <textarea
                    name="description"
                    placeholder="Notice Content"
                    rows="6"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                    {loading ? "Publishing..." : "Publish Notice"}
                </button>

            </form>

        </div>
    );
};

export default CreateNotice;