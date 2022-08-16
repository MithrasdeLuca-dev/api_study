const { Aluno, Curso, AlunoCursoComprado } = require('../models')

const perfilController = {
    index: async (request, response) => {
        const { id } = request.session.aluno;

        if (!request.session.autorizado) {

            return response.send('Você deve fazer o login');
        } else {

            const aluno = await Aluno.findOne({
                where: {
                    id
                }
            });

            return response.json(aluno);
        };

    }

};

module.exports = perfilController;