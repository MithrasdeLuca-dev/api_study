'use strict';

const bcrypt = require('bcryptjs');
const uuid = require('uuid');

module.exports = {
	async up(queryInterface) {
		return queryInterface.bulkInsert('usuarios', [
			{
				id: uuid.v4(),
				nome_documento: 'João',
				nome_social: 'Joãozinho',
				email: 'joao@gmail.com',
				senha: await bcrypt.hash('102030', 10),
				cpf: '12345678910',
				data_nascimento: '2015-08-15',
				roles: 'Aluno',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: uuid.v4(),
				nome_documento: 'Rebeca',
				nome_social: 'Beca',
				email: 'beca@gmail.com',
				senha: await bcrypt.hash('102030', 10),
				cpf: '45695175365',
				data_nascimento: '1975-08-15',
				roles: 'Administrador',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: uuid.v4(),
				nome_documento: 'Carlos',
				nome_social: 'Carlinhos',
				email: 'carlos@gmail.com',
				senha: await bcrypt.hash('102030', 10),
				cpf: '12345678910',
				data_nascimento: '2000-03-10',
				roles: 'Aluno',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: uuid.v4(),
				nome_documento: 'Paulo',
				nome_social: 'Paulinho',
				email: 'paulo@gmail.com',
				senha: await bcrypt.hash('102030', 10),
				cpf: '36925814710',
				data_nascimento: '1970-03-17',
				roles: 'Professor',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: uuid.v4(),
				nome_documento: 'Claudia',
				nome_social: 'Clau',
				email: 'claudia@gmail.com',
				senha: await bcrypt.hash('102030', 10),
				cpf: '36925814710',
				data_nascimento: '1999-08-15',
				roles: 'Aluna',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: uuid.v4(),
				nome_documento: 'Juliana',
				nome_social: 'Ju',
				email: 'juliana@gmail.com',
				senha: await bcrypt.hash('102030', 10),
				cpf: '32165498701',
				data_nascimento: '2010-10-20',
				roles: 'Aluna',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: uuid.v4(),
				nome_documento: 'Jack Pig',
				nome_social: 'Morzão Mor',
				email: 'jackeline.morais@gmail.com',
				senha: await bcrypt.hash('102030', 10),
				cpf: '32165498701',
				data_nascimento: '1999-09-30',
				roles: 'Aluna',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: uuid.v4(),
				nome_documento: 'Bruna',
				nome_social: 'Bruna',
				email: 'bruna@gmail.com',
				senha: await bcrypt.hash('102030', 10),
				cpf: '75695148635',
				data_nascimento: '1999-11-27',
				roles: 'Aluna',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: uuid.v4(),
				nome_documento: 'Sophia',
				nome_social: 'So',
				email: 'sophia@gmail.com',
				senha: await bcrypt.hash('102030', 10),
				cpf: '35765485321',
				data_nascimento: '1980-11-27',
				roles: 'Professora',
				created_at: new Date(),
				updated_at: new Date()
			}
		]);
	},
