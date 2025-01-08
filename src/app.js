const express = require('express');
const apiRoutes = require('./routes/apiV1Routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;
