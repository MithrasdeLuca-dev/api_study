const { Usuario } = require('../models');

const perfilController = {
    index: async (request, response) => {
        const id = request.params.id;

        const usuario = await Usuario.findByPk(id, { include: ['Cursos'] });

        if (!usuario) {
            return response.status(404).json({ msg: 'Usuário não encontrado' });
        };
        return response.status(200).json({ usuario });
    }
};

module.exports = perfilController;