'use strict';

module.exports = {
	async up(queryInterface) {
		return Promise.all([

			await queryInterface.addConstraint('cursos-comprados', {
				fields: ['usuario_id'],
				type: 'foreign key',
				name: 'aluno_curso_comprado',
				references: {
					table: 'usuarios',
					field: 'id'
				},
				onDelete: 'cascade',
				onUpdate: 'cascade'
			}),
			await queryInterface.addConstraint('cursos-comprados', {
				fields: ['curso_id'],
				type: 'foreign key',
				name: 'curso_comprado_curso',
				references: {
					table: 'cursos',
					field: 'id',
				},
				onDelete: 'cascade',
				onUpdate: 'cascade'
			})
		]);
	},

	async down(queryInterface) {
		return Promise.all([
			await queryInterface.removeConstraint('cursos-comprados', 'aluno_curso_comprado'),
			await queryInterface.removeConstraint('cursos-comprados', 'curso_comprado_curso'),
		]);
	}
};
