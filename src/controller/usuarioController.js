const { Usuario, AlunoCurso } = require('../models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const usuarioController = {

	show: async (response) => {
		const usuarioPerfil = await Usuario.findAll();

		console.log(usuarioPerfil);
		return response.json(usuarioPerfil);
	},

	store: async (request, response) => {
		const listaErros = validationResult(request);

		const { cargo, nome_documento, senha, cpf, email, nome_social, data_nascimento } = request.body;
		const passwordCriptografado = bcrypt.hashSync(senha, 10);

		if (!listaErros.isEmpty()) {
			return response.json(listaErros.errors);
		}

		const emailResult = await Usuario.findOne({
			where: {
				email
			}
		});

		if (emailResult) {
			return response.json({ msg: 'Esse email já foi cadastrado' });
		}

		const usuario = await Usuario.create({
			nome_documento,
			senha: passwordCriptografado,
			cpf,
			email,
			nome_social,
			data_nascimento,
			roles: cargo
		});
		return response.json(usuario);
	},

	update: async (request, response) => {
		
		const { cargo, nome_documento, senha, cpf, email, nome_social, data_nascimento } = request.body;
		const passwordCriptografado = bcrypt.hashSync(senha, 10);
		
		const { idUsuario } = request.params;
		const { id, role } = request.usuario;
		
		const listaErros = validationResult(request);
		if (!listaErros.isEmpty()) {
			return response.json(listaErros.errors);
		}

		const emailResult = await Usuario.findOne({
			where: {
				email
			}
		});
		
		const usuario = await Usuario.findByPk(idUsuario);

		if (emailResult) {
			return response.json({ msg: 'Esse email já foi cadastrado' });
		}

		if (usuario.id == id || role == 'Administrador') {
			await Usuario.update({
				nome_documento,
				senha: passwordCriptografado,
				cpf,
				email,
				nome_social,
				data_nascimento,
				roles:cargo
			},
			{
				where: { id: idUsuario }
			}
			);
			return response.json('Dados atualizados');
		}
		return response.json('Você não tem autorização para esta função');
	},

	delete: async (request, response) => {

		const { idUsuario } = request.params;
		const { id, role } = request.usuario;

		const usuario = await Usuario.findByPk(idUsuario);

		if (usuario.id == id || role == 'Administrador') {
			const cursoUsuario = await AlunoCurso.findOne({
				where: {
					usuario_id: idUsuario
				}
			});


			if (cursoUsuario) {
				await AlunoCurso.destroy({
					where: {
						usuario_id: idUsuario
					}
				});
			}
            
			if (usuario) {
				await Usuario.destroy({
					where: {
						id: usuario
					}
				});
			}
			return response.json('Dados deletados');
		}
	}
};
module.exports = usuarioController;