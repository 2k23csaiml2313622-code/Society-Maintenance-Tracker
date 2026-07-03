import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../services/authService";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        flatNumber: ""
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

            const response = await registerUser(formData);

            toast.success(response.message);

            navigate("/login");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Registration Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Card>
                <h1 className="text-3xl font-bold text-center mb-8">
                    Create Account
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 w-[350px]"
                >
                    <Input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <Input
                        name="flatNumber"
                        placeholder="Flat Number"
                        value={formData.flatNumber}
                        onChange={handleChange}
                    />

                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Register"}
                    </Button>

                    <p className="text-center">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    );
};

export default Register;