require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Import Routes
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests from frontend
app.use(express.json()); // Parse JSON request bodies

// MongoDB Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Task Manager Backend API is running!');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
