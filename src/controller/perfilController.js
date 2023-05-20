const { Usuario } = require('../models');

const perfilController = {
	index: async (request, response) => {
		const { idLog } = request.params;
		const { id } = request.usuario;

		if (id === idLog) {
			const usuario = await Usuario.findByPk(id, { include: ['Cursos'] });

			return response.status(200).json({ usuario });
		}
		return response.status(404).json({ msg: 'Usuário não encontrado! tente logar novamen' });

	}
};

module.exports = perfilController;