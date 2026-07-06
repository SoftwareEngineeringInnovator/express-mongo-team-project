import express from "express";
import productRoutes from "./routes/products.js";

const app = express();

app.use(express.json());

// routes
app.use("/products", productRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});