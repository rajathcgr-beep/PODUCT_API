const express = require("express");

const app = express();

app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1000 }
];

// GET - Get products
app.get("/products", (req, res) => {
    res.json(products);
});

// POST - Add product
app.post("/products", (req, res) => {
    const product = req.body;

    products.push(product);

    res.json({
        message: "Product added successfully",
        product: product
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});