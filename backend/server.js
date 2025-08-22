// backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authMiddleware = require('./middleware/auth');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// --- Routes Section ---
// Public routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/messages', require('./routes/messages')); // <-- ADD THIS LINE

// Protected Admin routes
app.use('/api/admin', authMiddleware, require('./routes/admin'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));