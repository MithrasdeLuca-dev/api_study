const express = require('express');
const router = express.Router();

const alunoController = require('../controller/alunoController')

/* GET users listing. */
router.post('/', alunoController.novoAluno)

module.exports = router;
