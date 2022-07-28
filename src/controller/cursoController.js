const { Curso, Aluno, CursoComprado } = require('../models');

const cursoController = {
    store: async (request, response) => {
        const { nome_curso, duracao, } = request.body;

        const curso = await Curso.create({
            nome_curso,
            duracao
        });
        return response.json(curso);
    },

    cursoComprado: async (request, response) => {
        const  {idCurso, idAluno}  = request.body

        const curso = await CursoComprado.create({
            curso_id: idCurso,
            aluno_id: idAluno
        })

        console.log(curso)
        return response.send(curso)
    }
}

module.exports = cursoController;