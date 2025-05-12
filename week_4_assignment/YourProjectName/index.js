const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy data
let todos = [
  { id: 1, task: "Learn HTML", completed: false },
  { id: 2, task: "Build a REST API", completed: false },
];

// GET all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// GET single todo by ID
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found");
  res.json(todo);
});

// POST a new todo
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT (update) a todo
app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found");

  todo.task = req.body.task;
  todo.completed = req.body.completed;
  res.json(todo);
});

// DELETE a todo
app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Start server
app.listen(port, () => {
  console.log(`REST API running at http://localhost:${port}`);
});
