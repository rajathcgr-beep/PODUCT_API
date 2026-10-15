const express = require('express');
const app = express();

app.use(express.json());

// Array to store tasks
let tasks = [];

// POST /tasks - Add a new task
app.post('/tasks', (req, res) => {
    const { title, status, rating } = req.body;

    const task = { title, status, rating};
    tasks.push(task);

    res.status(201).json(task);
});

// GET /tasks - View all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});