// db.js
// This file connects our Express app to MongoDB using Mongoose.

// Import mongoose so we can connect to MongoDB.
import mongoose from "mongoose";

// Create an async function to connect to the database.
const connectDB = async () => {
  try {
    // Get the MongoDB connection string from the .env file.
    const mongoURI = process.env.MONGO_URI;

    // If the connection string is missing, show a helpful error.
    if (!mongoURI) {
      throw new Error("MONGODB_URI is missing from the .env file.");
    }

    // Connect to MongoDB using Mongoose.
    const conn = await mongoose.connect(mongoURI);

    // Show a success message in the terminal.
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Show the error if the connection fails.
    console.error("MongoDB connection error:", error.message);

    // Stop the app if the database connection fails.
    process.exit(1);
  }
};

// Export the connectDB function so index.js can import it.
export default connectDB;