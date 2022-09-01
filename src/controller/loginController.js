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

        if (!aluno) { return response.send('email ou senha invalido') };

        const senhaAluno = bcrypt.compareSync(senha, aluno.senha);

        if (!senhaAluno) { return response.send('email ou senha invalido') };

        const secret = process.env.SECRET;

        const token = jwt.sign(
            { id: aluno.id }, secret,
        );

        return response.status(200).json({ msg: 'Autenticação autorizada com sucesso', token });
    },
    
};

module.exports = loginController;