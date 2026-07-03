import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../../services/authService";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
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

            const data = await loginUser(formData);

            login(data.user, data.token);

            toast.success("Login Successful");

            if (data.user.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/resident/dashboard");
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Login Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Card>
                <h1 className="text-3xl font-bold text-center mb-8">
                    Society Maintenance Tracker
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 w-[350px]"
                >
                    <Input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <Input
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Logging In..." : "Login"}
                    </Button>

                    <p className="text-center">
                        Don't have an account?{" "}
                        <Link
                            className="text-blue-600"
                            to="/register"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    );
};

export default Login;