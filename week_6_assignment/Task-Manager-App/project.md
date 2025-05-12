# Task Manager Application

This repository contains a full-stack Task Manager application, comprising a React.js frontend and a Node.js/Express.js backend API.

## Table of Contents

1.  [Project Structure](#project-structure)
2.  [Backend (API)](#backend-api)
    * [Technologies Used](#technologies-used)
    * [Setup & Running the Backend](#setup--running-the-backend)
    * [API Endpoints](#api-endpoints)
    * [Database](#database)
3.  [Frontend (React App)](#frontend-react-app)
    * [Technologies Used](#technologies-used-1)
    * [Setup & Running the Frontend](#setup--running-the-frontend-1)
    * [Connecting to the Backend](#connecting-to-the-backend)
4.  [Key Features](#key-features)
5.  [Troubleshooting & Common Issues](#troubleshooting--common-issues)
6.  [Deployment](#deployment)

---

## 1. Project Structure

The project is structured as a monorepo with two main directories:
Here's the content for your README.md file:

Markdown

# Task Manager Application

This repository contains a full-stack Task Manager application, comprising a React.js frontend and a Node.js/Express.js backend API.

## Table of Contents

1.  [Project Structure](#project-structure)
2.  [Backend (API)](#backend-api)
    * [Technologies Used](#technologies-used)
    * [Setup & Running the Backend](#setup--running-the-backend)
    * [API Endpoints](#api-endpoints)
    * [Database](#database)
3.  [Frontend (React App)](#frontend-react-app)
    * [Technologies Used](#technologies-used-1)
    * [Setup & Running the Frontend](#setup--running-the-frontend-1)
    * [Connecting to the Backend](#connecting-to-the-backend)
4.  [Key Features](#key-features)
5.  [Troubleshooting & Common Issues](#troubleshooting--common-issues)
6.  [Deployment](#deployment)

---

## 1. Project Structure

The project is structured as a monorepo with two main directories:

project-root/
├── client/         # React.js Frontend Application
│   ├── public/
│   ├── src/
│   ├── .env        # Environment variables for the frontend
│   ├── package.json
│   └── ...
└── root/           # Node.js/Express.js Backend API
├── models/     # Database models (e.g., User.js)
├── routes/     # API route handlers (e.g., userRoutes.js)
├── server.js   # Main Express server file
├── package.json
└── ...
## 2. Backend (API)

The backend is a RESTful API built with Node.js and Express.js, responsible for managing tasks.

### Technologies Used

* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web framework for Node.js.
* **(Likely) MongoDB:** NoSQL database (implied by `models` folder structure, common for MERN stack).
* **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
* **CORS:** Middleware for enabling Cross-Origin Resource Sharing.

### Setup & Running the Backend

1.  **Navigate to the backend directory:**
    ```bash
    cd project-root/root
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the server:**
    ```bash
    npm start
    ```
    The server will typically run on `http://localhost:5000` (as seen in `image_20321e.png`).

### API Endpoints

All API endpoints are prefixed with `/api`. The backend handles basic CRUD operations for tasks.

#### Tasks API (`/api/tasks`)

| Method | Endpoint         | Description                                    | Request Body (JSON)                     | Response (JSON)                                                | Status Codes                |
| :----- | :--------------- | :--------------------------------------------- | :-------------------------------------- | :------------------------------------------------------------- | :-------------------------- |
| `GET`  | `/api/tasks`     | Retrieves all tasks.                           | `None`                                  | `[ { "_id": "...", "text": "...", "__v": 0 } ]`              | `200 OK`                    |
| `POST` | `/api/tasks`     | Creates a new task.                            | `{"text": "My new task description"}`   | `{"_id": "...", "text": "My new task description", "__v": 0}` | `201 Created`               |
| `DELETE` | `/api/tasks/:id` | Deletes a task by its ID.                      | `None`                                  | `{"message": "Task deleted successfully"}` or `None`           | `200 OK`, `404 Not Found`   |
| `PUT`  | `/api/tasks/:id` | Updates an existing task by its ID.            | `{"text": "Updated task description"}`  | `{"_id": "...", "text": "Updated task description", "__v": 0}` | `200 OK`, `404 Not Found`   |

**Note:** The `PUT` endpoint is a common addition for task management (e.g., marking as complete) and is included here for completeness, even if not explicitly shown in the provided images.

### Database

The backend is designed to connect to a database, likely MongoDB, as indicated by the `models` directory.
* **Configuration:** Database connection details (e.g., MongoDB URI) should be stored in environment variables (e.g., a `.env` file in the `root` directory) to keep sensitive information out of the codebase.
* **Models:** The `models` folder (`image_1f50df.png`) contains schemas defining the structure of your data (e.g., `User.js` for user data, and likely `Task.js` for task data).

## 3. Frontend (React App)

The frontend is a single-page application built with React.js, providing the user interface for interacting with the Task Manager API.

### Technologies Used

* **React.js:** JavaScript library for building user interfaces.
* **Create React App:** (Likely) Used for scaffolding the React project.
* **HTML/CSS:** For structuring and styling the application.

### Setup & Running the Frontend

1.  **Navigate to the frontend directory:**
    ```bash
    cd project-root/client
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    ```
    The frontend application will typically open in your browser at `http://localhost:3000`.

### Connecting to the Backend

The frontend connects to the backend API using a base URL that can be configured via environment variables. This allows for easy switching between local development and deployed environments.

1.  **Create a `.env` file in the `client` directory:**
    ```
    REACT_APP_API_BASE_URL=http://localhost:5000
    ```
    This tells your React app to send API requests to your locally running backend.

2.  **In your React code (e.g., `src/App.js`):**
    You should define your `baseURL` using `process.env.REACT_APP_API_BASE_URL` as shown in `image_1f459d.png`:

    ```javascript
    const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
    ```
    This ensures that if the environment variable isn't set (e.g., during local development without the `.env` file being picked up correctly), it falls back to `http://localhost:5000`.

**Important:** If you modify the `.env` file, you must restart your React development server (`npm start`) for the changes to take effect.

## 4. Key Features

* **Add New Tasks:** Users can input a task description and add it to the list.
* **List Tasks:** Displays all tasks retrieved from the backend.
* **Delete Tasks:** Users can remove tasks from the list.
* **(Potential) Update Tasks:** Ability to mark tasks as complete or edit their description.

## 5. Troubleshooting & Common Issues

Here are some common issues and their solutions for this project:

* **Tasks Not Showing After Add:**
    * **Cause:** The frontend's React state (the array of tasks) is not being updated after a successful `POST` request to the backend.
    * **Solution:** After a successful `POST` request for adding a task, either:
        1.  **Re-fetch all tasks:** Call your `WorkspaceTasks()` function again to get the updated list from the backend. This is often the simplest approach.
        2.  **Update state directly:** If your backend `POST` response returns the newly created task object, add that object directly to your `tasks` state array using `setTasks(prevTasks => [...prevTasks, newTask])`.

* **Malformed DELETE Request URL (404 Not Found for Delete):**
    * **Cause:** Incorrect interpolation of the task ID or `baseURL` when constructing the DELETE API endpoint URL in your frontend code. (`image_59e237.png`)
    * **Solution:** Ensure that in your delete function (e.g., `handleDelete`), you are correctly using template literals to include the base URL and the task ID:
        ```javascript
        const response = await fetch(`${baseURL}/api/tasks/${id}`, { method: 'DELETE' });
        ```
        Verify that `id` truly contains the task's unique identifier.

* **Frontend Cannot Connect to Backend (CORS or URL issues):**
    * **Cause:** The frontend (e.g., `localhost:3000`) is trying to access a backend on a different origin (e.g., `localhost:5000`), and CORS policies might be preventing the request. Or, the `REACT_APP_API_BASE_URL` is incorrectly set.
    * **Solution:**
        * **CORS:** Your backend seems to have `Access-Control-Allow-Origin: *` set (`image_63dda9.png`), which generally solves CORS issues for local development. If you encounter them, ensure your backend's CORS middleware is correctly configured.
        * **`REACT_APP_API_BASE_URL`:** Double-check that your `.env` file in the `client` directory is correct (`REACT_APP_API_BASE_URL=http://localhost:5000`) and that you have restarted the frontend development server after any changes to it.

* **Backend `npm start` Error: "Missing script: start":**
    * **Cause:** The `start` script is not defined in your backend's `package.json` file. (`image_20321e.png`)
    * **Solution:** Ensure your `root/package.json` has a `scripts` section similar to this:
        ```json
        "scripts": {
          "start": "node server.js",
          "dev": "nodemon server.js" // Optional: for development with auto-restart
        },
        ```

## 6. Deployment

Both the frontend and backend components can be deployed independently or together.

* **Backend Deployment (Node.js/Express):**
    * Platforms like Render, Railway, Heroku, or a custom VPS are suitable.
    * You'll need to configure environment variables for your database connection string and any other secrets on the chosen platform.
    * The deployed backend will provide a public URL (e.g., `https://your-backend-api.com`).

* **Frontend Deployment (React):**
    * Platforms like Vercel, Netlify, or GitHub Pages are excellent choices for static React applications.
    * When deploying the frontend, you **must** set the `REACT_APP_API_BASE_URL` environment variable in the deployment platform's settings. This variable should point to the public URL of your deployed backend (e.g., `https://your-backend-api.com`). This ensures your deployed frontend can communicate with your deployed backend.