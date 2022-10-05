const express = require('express');
const router = express.Router();
const perfilController = require('../controller/perfilController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:id', authMiddleware.auth ,perfilController.index);

module.exports = router;
