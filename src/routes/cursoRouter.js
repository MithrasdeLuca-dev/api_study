const express = require('express');
const router = express.Router();

const cursoController = require('../controller/cursoController');
const AlunoCursoController =require('../controller/AlunoCursoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', cursoController.show);
router.post('/', authMiddleware.auth, cursoController.store);
router.put('/:idCurso', authMiddleware.auth, cursoController.update);
router.delete('/:idCurso', authMiddleware.auth, cursoController.delete);

router.post('/usuario', authMiddleware.auth, AlunoCursoController.store);
router.get('/comprados', AlunoCursoController.show);

module.exports = router;