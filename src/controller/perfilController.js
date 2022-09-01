const { Aluno, Curso, AlunoCursoComprado } = require('../models')

const perfilController = {
    index: async (request, response) => {
        const id = request.params.id;

        const aluno = await Aluno.findBypk(id, '-senha');

        if (!aluno) {
            return response.status(404).json({ msg: 'Usuário não encontrado' });
        };

        return response.status(200).json({aluno});

    }

};

module.exports = perfilController;