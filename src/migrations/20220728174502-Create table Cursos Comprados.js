'use strict';

module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.createTable('cursos-comprados',{
      id:{ 
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false,
      },
      curso_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      aluno_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      }
    });
  },

  down:(queryInterface, Sequelize)=>{
    return queryInterface.dropTable('cursos-comprados');
  }
};
