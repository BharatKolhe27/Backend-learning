const express = require('express');
const userRoutes = require('./routes/useRoutes');

const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

// Built-in middleware
app.use(express.json());

// Custom middleware
app.use(loggerMiddleware);

// Routes
app.use('/api/users', userRoutes);

// Error handler (always last)
app.use(errorHandler);

module.exports = app;