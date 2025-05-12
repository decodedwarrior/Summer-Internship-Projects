const mongoose = require('mongoose');

// Define the schema for a task
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Task must have a title
  },
  completed: {
    type: Boolean,
    default: false, // New tasks are incomplete by default
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Export the Task model
module.exports = mongoose.model('Task', taskSchema);
