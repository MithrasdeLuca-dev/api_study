'use strict';

module.exports = {
	async up(queryInterface) {
		return await queryInterface.bulkInsert('cursos', [
			{
				nome_curso:'Front-End',
				duracao:'01:20:00',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				nome_curso:'Back-End',
				duracao:'02:35:00',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				nome_curso:'Inglês',
				duracao:'200:00:00',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				nome_curso:'Aussprachetraining Deutsch',
				duracao:'06:00:00',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				nome_curso:'React',
				duracao:'01:50:00',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				nome_curso:'Full-Stack',
				duracao:'08:30:00',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				nome_curso:'Lógica de Programação',
				duracao:'10:00:00',
				created_at: new Date(),
				updated_at: new Date()
			},
		]);
	}
}
