// server/app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/users', userRoutes); // Authentication routes

app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;
