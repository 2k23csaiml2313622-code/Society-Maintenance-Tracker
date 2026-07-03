import { useState } from "react";
import { toast } from "react-toastify";
import { createComplaint } from "../../services/complaintService";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";

const CreateComplaint = () => {
    const [formData, setFormData] = useState({
        category: "",
        description: ""
    });

    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.category || !formData.description) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            setLoading(true);

            const data = new FormData();

            data.append("category", formData.category);
            data.append("description", formData.description);

            if (photo) {
                data.append("photo", photo);
            }

            await createComplaint(data);

            toast.success("Complaint Submitted Successfully");

            setFormData({
                category: "",
                description: ""
            });

            setPhoto(null);

        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card>
            <h1 className="text-3xl font-bold mb-6">
                Raise Complaint
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                >
                    <option value="">Select Category</option>
                    <option>Electricity</option>
                    <option>Water</option>
                    <option>Plumbing</option>
                    <option>Cleaning</option>
                    <option>Security</option>
                    <option>Lift</option>
                    <option>Parking</option>
                    <option>Other</option>
                </select>

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your complaint"
                    rows="5"
                    className="w-full border rounded-lg p-3"
                />

                <Input
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                />

                <Button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit Complaint"}
                </Button>
            </form>
        </Card>
    );
};

export default CreateComplaint;