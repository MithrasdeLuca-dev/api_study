require('dotenv').config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: process.env.NODE_ENV !== 'production',
  define: {
    underscored: true,
    underscoredAll: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
}