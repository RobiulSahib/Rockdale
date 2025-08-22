// backend/config/db.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// This line is important to make sure process.env variables are available
dotenv.config();

const connectDB = async () => {
  try {
    // Mongoose will read the connection string from your .env file
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    // Exit the application with an error code if connection fails
    process.exit(1);
  }
};

module.exports = connectDB;