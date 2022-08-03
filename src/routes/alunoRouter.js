const express = require('express');
const router = express.Router();

const alunoController = require('../controller/alunoController');

/* GET users listing. */

router.get('/perfil', alunoController.show);
router.post('/create', alunoController.store);

router.put('/:idAluno', alunoController.update);
router.delete('/:idAluno', alunoController.delete);

module.exports = router;
