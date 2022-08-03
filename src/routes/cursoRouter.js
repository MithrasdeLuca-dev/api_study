const express = require('express');
const router = express.Router();
const cursoController = require('../controller/cursoController');
const AlunoCursoController =require('../controller/AlunoCursoController');

router.get('/', cursoController.show);
router.post('/', cursoController.store);
router.put('/:idCurso', cursoController.update);
router.delete('/:idCurso', cursoController.delete);

router.get('/comprados', AlunoCursoController.show);
router.post('/:aluno_id/aluno', AlunoCursoController.store);

module.exports = router;