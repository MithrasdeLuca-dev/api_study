const {body} =  require('express-validator');

const alunoValidator = {
    store:[
        body('nome_documento').notEmpty().withMessage('Deve preencher o nome de documento').bail(),
        body('nome_social').notEmpty().withMessage('Deve preencher o nome social').bail(),
        body('senha').isLength({min:6}).withMessage('Preencha a senha com no mínimo 6 caracteres').bail(),
        body('cpf').isNumeric({ min: 11 }).withMessage('Deve preencher o CPF com 11 dígitos').bail(),
        body('email').isEmail().withMessage('Deve preencher o email').bail(),
        body('data_nascimento').isDate().withMessage('Deve preencher a data de nascimento').bail(),
        
    ]
}

module.exports = alunoValidator;