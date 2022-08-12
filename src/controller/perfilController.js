const{Aluno, Curso, AlunoCursoComprado}= require('../models')

const perfilController = {
    index: async (request, response) => {
        
        return response.send('Logado')
    }
    
}

module.exports = perfilController;