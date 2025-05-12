
# 🧠 Task Manager API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing users and tasks. It supports user registration, login, and full CRUD operations for tasks.

## 📦 Features

- User Authentication (JWT)
- Create, Read, Update, Delete (CRUD) tasks
- MongoDB for persistent storage
- Secure environment variable handling with `dotenv`
- CORS enabled for frontend integration

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager-api.git
cd task-manager-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

In the root directory, create a `.env` file with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the Server

```bash
npm start
```

The API should now be running at `http://localhost:5000`

---

## 🔌 API Endpoints

### 🌐 Base URL

```
http://localhost:5000/api
```

---

### 👤 Users

#### POST `/api/users/register`

Register a new user.

```json
Request:
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securepassword"
}
```

#### POST `/api/users/login`

Log in with existing credentials.

```json
Request:
{
  "email": "jane@example.com",
  "password": "securepassword"
}
```

Response includes a JWT token:

```json
{
  "token": "jwt_token"
}
```

---

### ✅ Tasks (Protected Routes - JWT Required)

#### GET `/api/tasks`

Get all tasks for the authenticated user.

**Headers:**

```
Authorization: Bearer <token>
```

#### POST `/api/tasks`

Create a new task.

```json
{
  "title": "New Task",
  "description": "Do something important",
  "completed": false
}
```

#### PUT `/api/tasks/:id`

Update a task by ID.

```json
{
  "title": "Updated Task",
  "completed": true
}
```

#### DELETE `/api/tasks/:id`

Delete a task by ID.

---

## ⚙️ Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- JWT for authentication
- CORS and dotenv middleware

---

## 🛠 To Do

- Add user profile update route
- Add task prioritization
- Add due dates and notifications

---

## 📄 License

This project is licensed under the MIT License.
---

FRONT-END :-https://task-manager-theta-wheat-52.vercel.app/
