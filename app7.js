const express = require("express");

const app = express();

app.use(express.json());

let tasks = [];

// Add task
app.post("/tasks", (req, res) => {
    const task = req.body;
    tasks.push(task);

    res.json({
        message: "Task added successfully",
        task: task
    });
});

// View tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.listen(3000, () => {
    console.log("Task Manager running on http://localhost:3000");
});