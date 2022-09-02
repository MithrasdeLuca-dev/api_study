require('dotenv').config();
const { Aluno } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginController = {
    logar: async (request, response) => {
        const { email, senha } = request.body;

        const aluno = await Aluno.findOne({
            where: {
                email
            }
        });

        if (!aluno) {
            return response.status(401).json({
                errors: ['email ou senha invalido']
            });
        }

        const senhaAluno = bcrypt.compareSync(senha, aluno.senha);

        if (!senhaAluno) {
            return response.status(401).json({
                errors: ['email ou senha invalido']
            });
        }

        const secret = process.env.TOKEN_SECRET;
        const expires = process.env.TOKEN_EXPIRATION;

        const token = jwt.sign(
            { aluno: aluno.id }, secret, { expiresIn: expires }
        );

        return response.status(200).json({ msg: 'Autenticação autorizada com sucesso', token, expiresIn: expires });
    },

};

module.exports = loginController;