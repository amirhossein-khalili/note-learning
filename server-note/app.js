const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ApiError = require('./utils/ApiError');
var cors = require('cors');

const noteRoutes = require('./noteRoutes');
const todoRoutes = require('./todo/todoRoutes');
// Middewares
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cors());

// Routes
app.get('/status', (req, res) => {
  res.status(200).json({
    express: 'UP',
    mongo: mongoose.connection.readyState ? 'UP' : 'DOWN',
    project: 'note APP DB DEV',
  });
});

// APIs
app.use('/api/v1/notes', noteRoutes);
app.use('/api/v1/todos', todoRoutes);

// Handle 404
app.all('*', (req, res, next) => {
  next(new ApiError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling Middeware
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
