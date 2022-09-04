'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cursos', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
      },
      nome_curso: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duracao: {
        type: Sequelize.TIME,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cursos');
  }
};
