const hasRoleMiddleware = async (userType) => {
    return (request, response, next) => {
        const { role } = request.user;
    
        if(role === userType) {
            return next();
        }
    
        return response.status(403).json({ msg: "Não tem acesso" });
    }
};

module.exports = hasRoleMiddleware;