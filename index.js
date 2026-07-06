// Import dotenv first so our .env variables are available.
import "dotenv/config";

// Import Express so we can create our server.
import express from "express";

// Import our MongoDB connection function from db.js.
import connectDB from "./db.js";

// Create the Express app.
const app = express();

// Set the port. It will use the PORT from .env or default to 3000.
const PORT = process.env.PORT;

// Connect to MongoDB.
connectDB();

// Middleware that allows Express to read JSON data from requests.
app.use(express.json());

// Basic home route to confirm the server is running.
app.get("/", (req, res) => {
  res.send("Express MongoDB Team Project API is running.");
});

// Start the server.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});