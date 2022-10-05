const { AlunoCurso} = require('../models');

const AlunoCursoController = {
	show: async (request, response) => {
		const cursoVendido = await AlunoCurso.findAll();

		console.log(cursoVendido);
		return response.json(cursoVendido);
	},

	store: async (request, response) => {
		const { id, role } = request.usuario;
		const { curso_id } = request.body;

		if (role == 'Aluno' || 'Aluna') {
			const cursoComprar = await AlunoCurso.create({
				curso_id,
				usuario_id: id
			});
			return response.json('Curso comprado com sucesso');
		}
		return response.json('Você não tem autorização para esta função');
	}
};
module.exports = AlunoCursoController;