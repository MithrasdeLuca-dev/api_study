const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.post('/', loginController.logar);
router.get('/', loginController.logout);

module.exports = router;