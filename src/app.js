const express = require('express');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./routes/apiV1Routes');
const responseTemplate = require('./middlewares/response');

const app = express();

// CORS
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:8000',
  'http://localhost:8080',
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware
app.use(express.json());
app.use(responseTemplate);
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
  res.error({ message: 'Something went wrong!' });
});

module.exports = app;
