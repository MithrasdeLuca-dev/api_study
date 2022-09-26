'use strict';

const bcrypt = require('bcryptjs');
const uuid = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('usuarios', [
      {
        id: uuid.v4(),
        nome_documento: 'João',
        nome_social: 'Joãozinho',
        email: 'joao@gmail.com',
        senha: await bcrypt.hash('102030', 10),
        cpf: '12345678910',
        data_nascimento: '2015-08-15',
        types: "Aluno",
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
        types: "Aluno",
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
        data_nascimento: '1998-03-17',
        types: "Aluno",
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
        types: "Aluna",
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
        types: "Aluna",
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
        types: "Aluna",
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
        types: "Aluna",
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
        data_nascimento: '1999-11-27',
        types: "Aluna",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
