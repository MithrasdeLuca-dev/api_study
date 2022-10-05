const express = require('express');
const router = express.Router();


const usuarioController = require('../controller/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');
const usuarioValidator = require('../validators/usuarioValidators');

router.get('/', usuarioController.show);
router.post('/', usuarioValidator.store, usuarioController.store);

router.put('/:idUsuario', authMiddleware.auth,usuarioValidator.store, usuarioController.update);
router.delete('/:idUsuario', authMiddleware.auth, usuarioController.delete);

module.exports = router;
