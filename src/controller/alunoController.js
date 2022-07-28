const { Aluno } = require('../models');

const alunoController = {
    novoAluno: async (request, response) => {

        const {nome_documento, senha, cpf, email, nome_social, data_nascimento} = request.body;

        const aluno = await Aluno.create({
            nome_documento,
            senha,
            cpf,
            email,
            nome_social,
            data_nascimento,
        })
        return response.json(aluno);
    }
};
module.exports = alunoController;