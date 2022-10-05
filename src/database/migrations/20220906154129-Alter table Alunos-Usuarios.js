'use strict';

module.exports = {
	async up (queryInterface) {
		await queryInterface.renameTable('alunos','usuarios');
	},

	async down (queryInterface) {
		await queryInterface.renameTable('usuarios','alunos');
	}
};
