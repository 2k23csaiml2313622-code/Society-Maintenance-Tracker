# 🏢 Society Maintenance Tracker

A full-stack MERN-based Society Maintenance Tracker developed to simplify complaint management and society communication between Residents and Administrators.

---
## 🚀 Live Demo

- **Frontend:** https://society-maintenance-tracker-tawny.vercel.app/
- **Backend API:** https://society-maintenance-tracker-3.onrender.com/

 ## 📂 GitHub Repository

https://github.com/2k23csaiml2313622-code/Society-Maintenance-Tracker

## 📌 Project Overview

Society Maintenance Tracker is a web application that enables residents to register complaints, upload complaint images, view notices, and monitor complaint status, while allowing administrators to manage complaints, publish notices, and analyze complaint statistics through a dashboard.

The application is built using the MERN Stack and follows a modular MVC architecture.

---

# 🚀 Features

## 👤 Resident

- User Registration & Login (JWT Authentication)
- Raise Complaint
- Upload Complaint Images
- View My Complaints
- Complaint Status Tracking
- View Society Notices
- Profile Page

---

## 👨‍💼 Admin

- Secure Admin Login
- Dashboard Analytics
- View All Complaints
- Update Complaint Status
- Set Complaint Priority
- Publish Society Notices
- Complaint History Tracking

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS

## Backend

- Node.js
- Express.js
- JWT Authentication
- Multer
- Cloudinary

## Database

- MongoDB Atlas
- Mongoose ODM

---

# 📂 Project Structure

```
Society-Maintenance-Tracker
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── uploads
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│   └── package.json
│
└── README.md
```

---

# 🏗 System Design

```
                      +----------------------+
                      |      Resident        |
                      +----------+-----------+
                                 |
                                 |
                        React Frontend
                                 |
                                 |
                     Axios REST API Calls
                                 |
                                 |
                  Express.js Backend (MVC)
                                 |
        +-----------+------------+------------+
        |           |            |            |
     Auth      Complaint      Notice     Dashboard
     Module      Module        Module      Module
        |           |            |            |
        +-----------+------------+------------+
                                 |
                             MongoDB Atlas
                                 |
                          Cloudinary Storage
```

---

## 📊 System Architecture Diagram

![System Architecture](system_architecture_society_tracker.png)

---

# 🗄 Database Collections

## User

- Name
- Email
- Password
- Role
- Flat Number

---

## Complaint

- Category
- Description
- Photo
- Status
- Priority
- Resident
- Created At

---

## Complaint History

- Complaint ID
- Actor
- Status
- Note

---

## Notice

- Title
- Description
- Important
- Created By

---

# 🔐 Authentication

- JWT Authentication
- Role Based Authorization
- Protected Routes
- Admin Middleware

---

# 🔄 Project Workflow

1. User Registers/Login
2. JWT Token Generated
3. Resident Raises Complaint
4. Image Uploaded to Cloudinary
5. Complaint Stored in MongoDB
6. Admin Views Complaint
7. Admin Updates Status/Priority
8. Complaint History Updated
9. Resident Tracks Progress
10. Admin Publishes Notices

---

# 📡 REST APIs

## Authentication

- POST /api/auth/register
- POST /api/auth/login

---

## Complaints

- POST /api/complaints
- GET /api/complaints/my
- GET /api/complaints/all
- PUT /api/complaints/:id
- GET /api/complaints/history/:id

---

## Notices

- POST /api/notices
- GET /api/notices

---

## Dashboard

- GET /api/dashboard

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/<your-username>/Society-Maintenance-Tracker.git
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory.

Required variables:

```
PORT=
MONGO_URI=
JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

BREVO_API_KEY=
EMAIL_FROM=
ADMIN_EMAIL=

OVERDUE_DAYS=
```

---

# 📷 Screenshots

> Add screenshots of:

- Login Page
- Resident Dashboard
- Raise Complaint
- Complaint List
- Admin Dashboard
- Notice Board

---

# 🚀 Future Enhancements

- Email Notifications
- Push Notifications
- Complaint Assignment
- Complaint Chat
- Mobile Application
- Analytics Dashboard
- Payment Integration
- Visitor Management

---

# 👩‍💻 Author

**Aishwarya Mishra**

B.Tech CSE (AI & ML)

PSIT Kanpur

---

# 📜 License

This project is developed for educational and assignment purposes.

<img width="1400" height="900" alt="image" src="https://github.com/user-attachments/assets/9be9b68e-bcc8-4413-b717-1ce82afe4b8a" />

