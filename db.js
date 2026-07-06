// Import mongoose
const mongoose = require("mongoose");

require("dotenv").config();

// Create Async funtions to connect to the database
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error("MONGO_URI is missing from the .env file");
        }

        const conn = await mongoose.connect(mongoUI);

        console.log(`Mongo Connected: ${conn.connection.host}`);

    } catch (eror) {
        console.error("Mongo connection error:", error.message);

        process.exit(1);
    }
};

module.exports = connectDB;
