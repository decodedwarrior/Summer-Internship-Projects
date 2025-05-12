const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/usersdb')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

app.use(authRoutes);

app.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: `Welcome user ${req.userId}` });
});

app.listen(3000, () => console.log("Server running on port 3000"));