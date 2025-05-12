const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Make sure this file exists


// Get all tasks from MongoDB
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks); // Sends tasks to frontend
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// (optional) Post new task
router.post('/', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const saved = await newTask.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
// DELETE a task by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
