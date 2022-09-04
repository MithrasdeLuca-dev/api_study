const express = require('express');
const router = express.Router();
const cursoController = require('../controller/cursoController');
const AlunoCursoController =require('../controller/AlunoCursoController');
const hasRoleMiddleware = require('../middlewares/hasRole');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', cursoController.show);
router.post('/', cursoController.store);
router.put('/:idCurso', cursoController.update);
router.delete('/:idCurso', authMiddleware.auth ,hasRoleMiddleware('professor'), cursoController.delete);

router.get('/comprados', AlunoCursoController.show);
router.post('/:aluno_id/aluno', AlunoCursoController.store);

module.exports = router;