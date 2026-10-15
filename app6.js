const express = require("express");

const app = express();

app.use(express.json());

// Middleware - log method and URL
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 }
];

// GET products
app.get("/products", (req, res) => {
    res.json(products);
});

// POST product with validation
app.post("/products", (req, res) => {

    const { id, name, price } = req.body;

    if (!name || price <= 0) {
        return res.status(400).json({
            message: "Name is required and price must be greater than 0"
        });
    }

    const product = { id, name, price };
    products.push(product);

    res.json({
        message: "Product added successfully",
        product: product
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});