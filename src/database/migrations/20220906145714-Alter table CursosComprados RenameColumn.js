'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.removeConstraint('cursos-comprados', 'cursos-comprados_ibfk_1'),
      
      await queryInterface.removeConstraint('cursos-comprados', 'cursos-comprados_ibfk_2'),

      await queryInterface.renameColumn('cursos-comprados', 'aluno_id', 'usuario_id'),
      
      await queryInterface.changeColumn('cursos-comprados', 'usuario_id', {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
      }),
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('cursos-comprados', 'usuario_id', 'aluno_id', {
    })
  }
};
