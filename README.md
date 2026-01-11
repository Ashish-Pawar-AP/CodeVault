# 🚀 CodeVault – Reusable Code & API Management Platform (MERN Stack)

CodeVault is a **production‑grade full‑stack MERN application** designed to help developers **store, organize, version, and reuse code snippets and complete API modules**.  
It acts as a **personal developer knowledge base** and can be extended into a **team or SaaS product**.

---

## 📌 Why CodeVault?

Developers repeatedly:
- Rewrite the same authentication & CRUD logic
- Lose useful snippets across projects
- Lack structured storage for APIs & utilities
- Have no version history for reusable code

**CodeVault solves this by providing a secure, searchable, version‑controlled code storage platform.**

---

## ✨ Key Features

### 🔐 Authentication & Security
- User registration & login
- JWT‑based authentication
- Email verification via secure token
- Protected routes
- Change password functionality
- Secure password hashing (bcrypt)

### 🧩 Code Snippet Management
- Create, read, update, delete snippets
- Store code as plain text (safe & scalable)
- Syntax highlighting using **Monaco Editor (VS Code engine)**
- Copy snippet with usage tracking

### 📁 Collections (Folders)
- Organize snippets into collections  
  _Example: Auth APIs, React Components, Utilities_
- Create, update, delete collections

### 🧱 Modules (Feature‑Based Grouping)
- Group multiple snippets into a single module
- Example: **Authentication Module**
  - User model
  - Auth controller
  - Routes
  - Middleware
- Public / private visibility

### 🕒 Version History (Advanced Feature)
- Automatic version creation on snippet update
- View and load previous versions inside editor
- Improves reliability and rollback safety

### 🔍 Search & Filtering
- Search snippets by title
- Filter by language and category
- Sort by latest updates

### 🎨 UI & UX
- Dashboard layout with sidebar & navbar
- Protected pages
- Clean, responsive UI using Tailwind CSS
- Dark‑friendly developer UI

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios
- Monaco Editor

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Nodemailer

### Database
- MongoDB (Local / Atlas)

---

## 📂 Project Structure

### Backend
```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── app.js
├── server.js
├── .env
└── package.json
```

### Frontend
```
frontend/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

---

## ⚙️ Environment Variables

### Backend (`.env`)
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
CLIENT_URL=http://localhost:5173
```

### Frontend (`.env`)
```
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 Getting Started

### 1️⃣ Clone Repository
```
git clone https://github.com/Ashish-Pawar-AP/CodeVault.git
```

### 2️⃣ Backend Setup
```
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend Setup
```
cd frontend
npm install
npm run dev
```

---

## 🔑 Core API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/verify-email/:token`
- `PUT /api/auth/change-password`

### Snippets
- `POST /api/snippets`
- `GET /api/snippets`
- `GET /api/snippets/:id`
- `PUT /api/snippets/:id`
- `DELETE /api/snippets/:id`
- `POST /api/snippets/:id/copy`
- `GET /api/snippets/:id/versions`

### Collections & Modules
- `POST /api/collections`
- `GET /api/collections`
- `POST /api/modules`
- `GET /api/modules`

---

## 🧠 Architecture Highlights

- Modular MVC backend architecture
- JWT‑based stateless authentication
- Secure email verification flow
- Frontend protected routing
- Versioned data modeling
- Scalable SaaS‑ready design

---

## 📈 Future Enhancements
- Team collaboration & sharing
- Public snippet marketplace
- Snippet diff comparison
- Role‑based access control
- Export snippets (ZIP / JSON)

---

## 🏆 Resume‑Ready Project Description

**CodeVault – Reusable Code & API Management Platform**  
Built a full‑stack MERN application to securely store, organize, version, and reuse code snippets and API modules with JWT authentication, email verification, Monaco Editor integration, and scalable modular architecture.

---

## 📌 Project Status
Active development – production‑ready foundation complete.
