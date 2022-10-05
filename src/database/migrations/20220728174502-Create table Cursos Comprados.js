'use strict';

module.exports = {
	async up(queryInterface, Sequelize){
		return await queryInterface.createTable('cursos-comprados', {
			id: {
				type: Sequelize.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			curso_id: {
				type: Sequelize.INTEGER.UNSIGNED,
				allowNull: false,
				references: {
					model: {
						tableName: 'cursos',
					},
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			aluno_id: {
				type: Sequelize.INTEGER.UNSIGNED,
				allowNull: false,
				references: {
					model: {
						tableName: 'alunos',
					},
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			created_at: {
				type: Sequelize.DATE,
			},
			updated_at: {
				type: Sequelize.DATE,
			}
		});
	},

	async down (queryInterface){
		return await queryInterface.dropTable('cursos-comprados');
	}
};
