const { Usuario, AlunoCurso } = require('../models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const usuarioController = {

    show: async (request, response) => {
        const usuarioPerfil = await Usuario.findAll();

        console.log(usuarioPerfil);
        return response.json(usuarioPerfil);
    },

    store: async (request, response) => {
        const listaErros = validationResult(request);

        const { tipo, nome_documento, senha, cpf, email, nome_social, data_nascimento } = request.body;
        const passwordCriptografado = bcrypt.hashSync(senha, 10);

        if (!listaErros.isEmpty()) {
            return response.json(listaErros.errors)
        };

        const emailResult = await Usuario.findOne({
            where: {
                email
            }
        });

        if (emailResult) {
            return response.json({ msg: 'Esse email já foi cadastrado' });
        };

        const usuario = await Usuario.create({
            nome_documento,
            senha: passwordCriptografado,
            cpf,
            email,
            nome_social,
            data_nascimento,
            types:tipo
        });
        return response.json(usuario);
    },

    update: async (request, response) => {
        const { nome_documento, senha, cpf, email, nome_social, data_nascimento } = request.body;
        const passwordCriptografado = bcrypt.hashSync(senha, 10);

        const { idUsuario } = request.params;

        await Usuario.update({
            nome_documento,
            senha: passwordCriptografado,
            cpf,
            email,
            nome_social,
            data_nascimento,
        },
            {
                where: { id: idUsuario }
            }
        );
        return response.json('Dados atualizados');
    },

    delete: async (request, response) => {
        const { idUsuario } = request.params;

        await Usuario.destroy({
            where: {
                id: idUsuario
            }
        });
        await AlunoCurso.destroy({
            where: {
                aluno_id: idUsuario
            }
        });
        return response.json('Dados deletados');
    }
};
module.exports = usuarioController;