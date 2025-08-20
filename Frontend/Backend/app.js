const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectTodb = require('./db/db'); // ✅ correct relative path
const userRoutes = require('./routes/user.routes'); // ✅ CORRECTED path

const app = express();

// Connect to DB
connectTodb();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default Route
app.get('/', (req, res) => {
    res.send("hello world");
});

// Routes
app.use('/users', userRoutes);

module.exports = app;
