const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginController = {
	logar: async (request, response) => {
		const { email, senha } = request.body;

		const usuario = await Usuario.findOne({
			where: {
				email
			}
		});

		if (!usuario) {
			return response.status(401).json({
				errors: ['email ou senha invalido']
			});
		}

		const senhaUsuario = bcrypt.compareSync(senha, usuario.senha);

		if (!senhaUsuario) {
			return response.status(401).json({
				errors: ['email ou senha invalido']
			});
		}

		const secret = process.env.TOKEN_SECRET;
		const expires = process.env.TOKEN_EXPIRATION;



		const token = jwt.sign(
			{ idUsuario: usuario.id, nome: usuario.nome_social, role: usuario.roles }, secret, { expiresIn: expires }
		);

		return response.status(200).json({ msg: 'Olá ' + usuario.nome_social + ' autenticação autorizada com sucesso', token, expiresIn: expires });
	},

	logout: async (request, response) => {
    
	}
};

module.exports = loginController;