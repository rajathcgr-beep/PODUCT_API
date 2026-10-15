const express = require("express");

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.json({
            message: "Login successful"
        });
    } else {
        res.json({
            message: "Invalid username or password"
        });
    }
});

app.listen(3000, () => {
    console.log("Login API running on http://localhost:3000");
});