import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = async (file) => {
    const response = await cloudinary.uploader.upload(file.path, {
        folder: "society-maintenance-tracker"
    });

    return response.secure_url;
};

export default uploadToCloudinary;