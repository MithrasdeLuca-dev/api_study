require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_SCHEMA,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": true,
    "define": {
      "timestamps": true,
      "underscored": true,
      "underscoredAll": true,
      "createdAt": "created_at",
      "updatedAt": "updated_at"
    }
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_SCHEMA,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": 'mysql',
    "logging": true,
    "define": {
      "timestamps": true,
      "underscored": true,
      "underscoredAll": true,
      "createdAt": "created_at",
      "updatedAt": "updated_at"
    }
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_SCHEMA,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": 'mysql',
    "logging": false,
    "define": {
      "timestamps": true,
      "underscored": true,
      "underscoredAll": true,
      "createdAt": "created_at",
      "updatedAt": "updated_at"
    }
  }
}