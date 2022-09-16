'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([

      await queryInterface.changeColumn('usuarios', 'id', {
        type: Sequelize.DataTypes.UUID,
        autoIncrement:false

      }),
      
      await queryInterface.addColumn('usuarios', 'types', {
        type: Sequelize.STRING,
        allowNull: false
      })
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      
      await queryInterface.changeColumn('usuarios', 'id', {
        type: Sequelize.DataTypes.INTEGER
      }),
      
      await queryInterface.removeColumn('usuarios', 'types'),
    ]);
  }
};
