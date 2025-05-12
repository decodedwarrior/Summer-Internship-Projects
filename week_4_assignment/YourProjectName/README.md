# Week 4 Tasks: Building a REST API with Node.js and Express

## Overview

In Week 4, the focus is on backend development using Node.js and Express.js. You will learn the fundamentals of building a server, defining routes, and handling HTTP requests to perform CRUD operations (Create, Read, Update, Delete). The goal is to build a simple RESTful API for managing user data and to test the endpoints using Postman.

---

## Tasks

### 1. Learn About Node.js and Express.js

- Understand what Node.js is and why it's used for backend development.
- Learn how Express.js simplifies the process of building servers and APIs in Node.
- Set up a basic Express server and test it locally.

### 2. Create a Simple REST API for Managing Users

- Initialize a Node.js project using `npm init`.
- Install Express with `npm install express`.
- Create a file named `index.js` that sets up the server and defines API endpoints.
- Use in-memory storage (e.g., a JavaScript array) to store user data temporarily.
- Implement the following routes:
  - `GET /users` – Retrieve all users.
  - `POST /users` – Create a new user.
  - `GET /users/:id` – Retrieve a user by their ID.
  - `PUT /users/:id` – Update an existing user.
  - `DELETE /users/:id` – Delete a user.

### 3. Use Postman to Test API Endpoints

- Install and open Postman.
- Create requests for each of the API routes listed above.
- Use JSON format for request bodies where applicable.
- Confirm that the API behaves as expected: returns correct status codes and data.

---

## Summary

By the end of this week, you should be comfortable with:
- Setting up a Node.js project.
- Creating and managing routes using Express.js.
- Performing CRUD operations on user data.
- Testing your API using Postman.

This hands-on experience is crucial for understanding how web servers work and will serve as a foundation for future backend and full-stack development.
