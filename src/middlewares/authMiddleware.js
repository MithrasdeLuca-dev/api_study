const authMiddleware = {
    auth: (request, response, next) => {
        if(request.session.aluno){
            return next()
        }
        return response.send("Deve estar logado")
    }
};
module.exports = authMiddleware;