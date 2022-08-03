const { Curso } = require('../models');

const cursoController = {
    show: async (request, response) => {
        const cursoAtivo = await Curso.findAll();

        console.log(cursoAtivo)
        return response.json(cursoAtivo)
    },

    store: async (request, response) => {
        const { nome_curso, duracao, } = request.body;

        const curso = await Curso.create({
            nome_curso,
            duracao
        });
        return response.json(curso);
    },


    update: async (request, response) => {
        const { idCurso } = request.params;
        const { nome_curso, duracao, } = request.body;

        await Curso.update({
            nome_curso,
            duracao
        },
            {
                where: { id: idCurso }
            }
        );
        return response.json('Curso atualizado');
    },

    delete: async (request, response) => {
        const { idCurso } = request.params;

        await Curso.destroy({
            where: { id: idCurso }
        })
        return response.json('Curso deletado')
    }
}

module.exports = cursoController;