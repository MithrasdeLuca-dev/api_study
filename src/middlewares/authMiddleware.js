const jwt = require('jsonwebtoken');
require('dotenv').config();
const authMiddleware = {
    auth: (request, response, next) => {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split("")[1];

        if (!token) {
            return response.status(401).json({ msg: 'Acesso negado!' })
        };

        try {
            const secret = process.env.SECRET;

            jwt.verify(token, secret);

            return next();
        } catch (error) {
            return response.status(400).json({ msg: "Token inválido" });
        };
    }
};
module.exports = authMiddleware;