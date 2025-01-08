const express = require('express');
const apiRoutes = require('./routes/apiV1Routes');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Favicon
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/favicon.ico'));
});

// Route untuk file Swagger JSON
app.get('/swagger.json', (req, res) => {
  res.sendFile(path.join(__dirname, '../swagger.json'));
});

// Route utama untuk dokumentasi API
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/docs.html'));
});

// Routes
app.use('/api/v1', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;
