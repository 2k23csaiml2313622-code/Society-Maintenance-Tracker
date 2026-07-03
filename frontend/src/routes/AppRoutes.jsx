import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import ResidentDashboard from "../pages/resident/ResidentDashboard";
import CreateComplaint from "../pages/resident/CreateComplaint";
import MyComplaints from "../pages/resident/MyComplaints";
import NoticeBoard from "../pages/resident/NoticeBoard";
import Profile from "../pages/resident/Profile";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageComplaints from "../pages/admin/ManageComplaints";
import CreateNotice from "../pages/admin/CreateNotice";

import ProtectedRoute from "../components/layout/ProtectedRoute";
import ResidentLayout from "../components/layout/ResidentLayout";
import AdminLayout from "../components/layout/AdminLayout";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/login" replace />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/resident"
                    element={
                        <ProtectedRoute role="resident">
                            <ResidentLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route
                        path="dashboard"
                        element={<ResidentDashboard />}
                    />

                    <Route
                        path="create"
                        element={<CreateComplaint />}
                    />

                    <Route
                        path="my"
                        element={<MyComplaints />}
                    />

                    <Route
                        path="notices"
                        element={<NoticeBoard />}
                    />

                    <Route
                        path="profile"
                        element={<Profile />}
                    />
                </Route>

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute role="admin">
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route
                        path="dashboard"
                        element={<AdminDashboard />}
                    />

                    <Route
                        path="complaints"
                        element={<ManageComplaints />}
                    />

                    <Route
                        path="notices"
                        element={<CreateNotice />}
                    />
                </Route>

                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;