const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

//configs de la base de datos
const db = new Sequelize({
    dialect: process.env.DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    logging: false//para que no muestre las consultas de ejemplo
})

module.exports = db;