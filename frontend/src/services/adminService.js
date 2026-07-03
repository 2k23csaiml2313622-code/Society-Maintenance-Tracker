import api from "./api";

export const getAllComplaints = async () => {
    const response = await api.get("/complaints/all");
    return response.data;
};

export const updateComplaint = async (id, data) => {
    const response = await api.put(`/complaints/${id}`, data);
    return response.data;
};

export const createNotice = async (data) => {
    const response = await api.post("/notices", data);
    return response.data;
};