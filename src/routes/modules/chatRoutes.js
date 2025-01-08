const express = require('express');
const chatController = require('../../controllers/chatController');

const router = express.Router();

// query chat
router.post('/', chatController.ragProcess);

module.exports = router;
