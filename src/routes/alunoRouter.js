const express = require('express');
const router = express.Router();


const usuarioController = require('../controller/usuarioController');

const usuarioValidator = require('../validators/usuarioValidators');

router.get('/', usuarioController.show);
router.post('/', usuarioValidator.store, usuarioController.store);

router.put('/:idUsario', usuarioController.update);
router.delete('/:idUsuario', usuarioController.delete);

module.exports = router;
