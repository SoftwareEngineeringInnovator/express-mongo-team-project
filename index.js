const express = require("express");
const app = express();

const productRoutes = require("./routes/products");

app.use(express.json());

// connect routes
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});