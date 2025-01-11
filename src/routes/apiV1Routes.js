const express = require('express');
const router = express.Router();

const productRoutes = require('./modules/productRoutes');

const chatController = require('../controllers/chatController');
const masterController = require('../controllers/masterController');

// Group routes
router.use('/products', productRoutes);

router.post('/query', chatController.ragProcess);
router.get('/master', masterController.get);

module.exports = router;
