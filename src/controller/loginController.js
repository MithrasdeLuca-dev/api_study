const { Aluno } = require('../models');
const bcrypt = require('bcryptjs');

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

        request.session.autorizado = true;
        request.session.aluno = aluno;

        return response.redirect('./perfil');
    }
};

module.exports = loginController;