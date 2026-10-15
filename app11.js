const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

app.post("/addOrders", (req, res) => {
    orders.push(req.body);
    res.json({ message: "Order added successfully" });
});

app.get("/showOrders", (req, res) => {
    res.json(orders.slice(-5).reverse());
});

app.listen(3000, () => {
    console.log("Shopping Cart running on port 3000");
});