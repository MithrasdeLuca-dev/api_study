const { AlunoCurso, Curso,Aluno } = require('../models');

const AlunoCursoController = {
    show: async (request, response) => {
        const cursoVendido = await AlunoCurso.findAll();

        console.log(cursoVendido);
        return response.json(cursoVendido);
    },

    store: async (request, response) => {
        const { aluno_id } = request.params;
        const { curso_id } = request.body;

        const cursoComprar = await AlunoCurso.create({
            curso_id,
            usuario_id:aluno_id
        })
        console.log(cursoComprar);
        return response.json(cursoComprar);
    }
};
module.exports = AlunoCursoController;