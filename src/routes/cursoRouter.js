const express = require('express');
const router = express.Router();
const cursoController = require('../controller/cursoController');

router.post('/', cursoController.store);
router.post('/comprado', cursoController.cursoComprado);

module.exports = router;