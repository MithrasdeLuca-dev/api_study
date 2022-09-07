'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('alunos','usuarios')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('usuarios','alunos')
  }
};
