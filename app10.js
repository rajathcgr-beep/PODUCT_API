const express = require("express");

const app = express();

app.use(express.json());

app.post("/send", async (req, res) => {

    const response = await fetch(
        "http://localhost:5678/webhook-test/student",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        }
    );

    const data = await response.json();

    console.log("n8n Response:", data);

    res.json({
        message: "Data sent to n8n",
        response: data
    });
});

app.listen(3000, () => {
    console.log("API running on http://localhost:3000");
});