const express = require('express');
const router = express.Router();


const alunoController = require('../controller/alunoController');

const alunoValidator = require('../validators/alunoValidators');

router.get('/', alunoController.show);
router.post('/', alunoValidator.store, alunoController.store);

router.put('/:idAluno', alunoController.update);
router.delete('/:idAluno', alunoController.delete);

module.exports = router;
