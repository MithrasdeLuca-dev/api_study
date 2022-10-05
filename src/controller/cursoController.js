const { Curso } = require('../models');

const cursoController = {
    show: async (request, response) => {
        const cursoAtivo = await Curso.findAll();

        console.log(cursoAtivo)
        return response.json(cursoAtivo)
    },

    store: async (request, response) => {
        const { role } = request.usuario;
        const { nome_curso, duracao, } = request.body;

        if (role == "Professor" || "Professora") {
            const curso = await Curso.create({
                nome_curso,
                duracao
            });
            return response.json("Curso cadastrado com sucesso");
        }
        return response.json("Você não tem autorização para esta função");
    },


    update: async (request, response) => {
        const { role } = request.usuario;
        const { idCurso } = request.params;
        const { nome_curso, duracao, } = request.body;

        if (role == "Professor" || "Professora") {
            await Curso.update({
                nome_curso,
                duracao
            },
                {
                    where: { id: idCurso }
                }
            );
            return response.json('Curso atualizado');
        };
        return response.json("Você não tem autorização para esta função");
    },

    delete: async (request, response) => {
        const { idCurso } = request.params;
        const { role } = request.usuario;

        if (role == "Professor" || "Professora") {
            await Curso.destroy({
                where: { id: idCurso }
            })
            return response.json('Curso deletado');
        };

        return response.json("Você não tem autorização para esta função");
    }
};
module.exports = cursoController;