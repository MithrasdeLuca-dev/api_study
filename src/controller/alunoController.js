const { Aluno } = require('../models');
const bcrypt = require('bcryptjs');

const alunoController = {

    show: async (request, response) => {
        const alunoPerfil = await Aluno.findAll();

        console.log(alunoPerfil);
        return response.json(alunoPerfil);
    },

    store: async (request, response) => {
        const { nome_documento, senha, cpf, email, nome_social, data_nascimento } = request.body;
        const passwordCriptografado = bcrypt.hash(senha, 10)
        const aluno = await Aluno.create({
            nome_documento,
            senha:passwordCriptografado,
            cpf,
            email,
            nome_social,
            data_nascimento,
        })
        return response.json(aluno);
    },

    update: async (request, response) => {
        const { nome_documento, senha, cpf, email, nome_social, data_nascimento } = request.body;

        const { idAluno } = request.params;

        await Aluno.update({
            nome_documento,
            senha,
            cpf,
            email,
            nome_social,
            data_nascimento,
        },
            {
                where: { id: idAluno }
            }
        );
        return response.json('Dados atualizados')
    },

    delete: async (request, response) => {
        const { idAluno } = request.params;

        await Aluno.destroy({
            where: {
                id: idAluno
            }
        })
        return response.json('Dados deletados')
    }
};
module.exports = alunoController;