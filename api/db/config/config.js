import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_HOST,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgress',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_HOST,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgress',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_HOST,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgress',
  },
};
