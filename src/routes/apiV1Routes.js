const express = require('express');
const router = express.Router();

// const productRoutes = require('./modules/productRoutes');
const chatRoutes = require('./modules/chatRoutes');

// Group routes
// router.use('/products', productRoutes);
router.use('/query', chatRoutes);

module.exports = router;
