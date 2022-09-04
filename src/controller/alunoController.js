const { Aluno, AlunoCurso } = require('../models');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const alunoController = {

    show: async (request, response) => {
        const alunoPerfil = await Aluno.findAll();

        console.log(alunoPerfil);
        return response.json(alunoPerfil);
    },

    store: async (request, response) => {
        const listaErros = validationResult(request);

        const { nome_documento, senha, cpf, email, nome_social, data_nascimento } = request.body;
        const passwordCriptografado = bcrypt.hashSync(senha, 10);

        if (!listaErros.isEmpty()) {
            return response.json(listaErros.errors)
        };

        const emailResult = await Aluno.findOne({
            where: {
                email
            }
        });

        if (!emailResult) {
            const aluno = await Aluno.create({
                nome_documento,
                senha: passwordCriptografado,
                cpf,
                email,
                nome_social,
                data_nascimento,
            });
            return response.json(aluno);
        };
        return response.json({ msg: 'Esse email já foi cadastrado' });
    },

    update: async (request, response) => {
        const { nome_documento, senha, cpf, email, nome_social, data_nascimento } = request.body;
        const passwordCriptografado = bcrypt.hashSync(senha, 10);

        const { idAluno } = request.params;

        await Aluno.update({
            nome_documento,
            senha: passwordCriptografado,
            cpf,
            email,
            nome_social,
            data_nascimento,
        },
            {
                where: { id: idAluno }
            }
        );
        return response.json('Dados atualizados');
    },

    delete: async (request, response) => {
        const { idAluno } = request.params;
        const {id} =  request.user

        await Aluno.destroy({
            where: {
                id: idAluno
            }
        });
        await AlunoCurso.destroy({
            where: {
                aluno_id: idAluno
            }
        });
        return response.json('Dados deletados');
    }
};
module.exports = alunoController;