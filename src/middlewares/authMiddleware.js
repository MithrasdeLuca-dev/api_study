const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = {
    auth: async(request, response, next) => {
        const {authorization} = request.headers

        const [,token] = authorization.split(' ');

        if (!token) {
            return response.status(401).json({ msg: 'Acesso negado!' })
        };

        try {
            const secret = process.env.TOKEN_SECRET;
            
            await jwt.verify(token, secret);
            return next();
        } catch (error) {
            return response.status(400).json({ msg: "O tempo foi expirado, faça o login novamente" });
        };
    }
};
module.exports = authMiddleware;