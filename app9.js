const express = require("express");

const app = express();

app.get("/weather", async (req, res) => {

    const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current=temperature_2m,relative_humidity_2m"
    );

    const data = await response.json();

    res.json({
        city: "Channapatna",
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m
    });
});

app.listen(3000, () => {
    console.log("Weather API running on http://localhost:3000");
});