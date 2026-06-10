# NexusCRM 🐦‍🔥

### Connecting Leads. Building Relationships.

NexusCRM is a modern Client Lead Management System built using the MERN Stack. It helps businesses organize, track, and convert potential clients through a secure and intuitive dashboard.

Designed to streamline lead management workflows, NexusCRM allows administrators to monitor incoming leads, update their status, maintain follow-up notes, and analyze conversion progress in one centralized platform.

---

## 🚀 Features

### 🔐 Authentication & Security

* Secure Admin Login
* JWT-Based Authentication
* Protected Dashboard Access
* Password Hashing using bcrypt

### 👥 Lead Management

* View All Leads
* Add New Leads
* Update Lead Status
* Delete Leads
* Manage Client Information

### 📊 Lead Tracking

* New Leads
* Contacted Leads
* Converted Leads

### 📈 Dashboard Analytics

* Total Leads Counter
* Contacted Leads Counter
* Converted Leads Counter

### 📝 Follow-Up Management

* Store Client Notes
* Track Customer Interactions
* Manage Follow-Up Activities

---

## 🛠️ Technology Stack

### Frontend

* React.js
* React Router DOM
* Axios
* HTML5
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Development Tools

* Visual Studio Code
* MongoDB Compass
* Git
* GitHub

---

## 📂 Project Structure

```text
NexusCRM
│
├── backend
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   └── leadController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── Admin.js
│   │   └── Lead.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── leadRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── public
│   │   └── index.html
│   │
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── LeadTable.jsx
│   │   │   └── LeadTable.css
│   │   │
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Login.css
│   │   │   ├── Dashboard.jsx
│   │   │   └── Dashboard.css
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone <repository-url>
```

---

### 2. Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/minicrm

JWT_SECRET=mysecretkey
```

Start the backend server:

```bash
npm run dev
```

Expected Output:

```text
MongoDB Connected
Server running on port 5000
```

---

### 3. Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the React application:

```bash
npm start
```

Application URL:

```text
http://localhost:3000
```

---

## 🗄️ Database Setup

1. Install MongoDB Community Server
2. Install MongoDB Compass
3. Connect using:

```text
mongodb://127.0.0.1:27017
```

4. Create Database:

```text
minicrm
```

5. Create Collections:

```text
admins
leads
```

---

## 👤 Admin Credentials

Example:

```text
Email: admin@gmail.com
Password: admin123
```

Passwords should be stored using bcrypt hashing.

---

## 📄 Sample Lead Document

```json
{
  "name": "John Smith",
  "email": "john@gmail.com",
  "source": "Website",
  "status": "New",
  "notes": "Interested in CRM services"
}
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint        |
| ------ | --------------- |
| POST   | /api/auth/login |

### Lead Management

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /api/leads     |
| POST   | /api/leads     |
| PUT    | /api/leads/:id |
| DELETE | /api/leads/:id |

---

## 🎯 Future Enhancements

* Lead Search & Filtering
* Email Notifications
* Advanced Analytics Dashboard
* Export Leads to CSV
* Dark Mode
* Team Collaboration Features
* Activity Logs
* Customer Conversion Reports

---

## 📚 Learning Outcomes

Through this project, I gained hands-on experience in:

* Full Stack Web Development
* REST API Development
* React Component Architecture
* JWT Authentication
* MongoDB Database Design
* CRUD Operations
* Client Lead Management Systems

---

## 👩‍💻 Author

**Angelin Jinto**

B.Tech Computer Science Engineering Student

---

## 📜 License

This project is developed for educational, internship, and portfolio purposes.

---

### NexusCRM 🐦‍🔥

**Connecting Leads. Building Relationships.**
