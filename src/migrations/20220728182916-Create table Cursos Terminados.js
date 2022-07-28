'use strict';

module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.createTable('cursos-finalizados',{
      id:{ 
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIcrement: true,
        allowNull: false,
      },
      cursos_comprados_id:{
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
    return queryInterface.dropTable('cursos-finalizados');
  }
};
