const express = require('express');
const router = express.Router();

const alunoController = require('../controller/alunoController');

router.get('/', alunoController.show);
router.post('/', alunoController.store);

router.put('/:idAluno', alunoController.update);
router.delete('/:idAluno', alunoController.delete);

module.exports = router;
