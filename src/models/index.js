import { Sequelize, DataTypes } from 'sequelize';
import logger from '@utils/Logger';
import process from 'process';
import databaseConfiguration from '../config/config.json';
import init from "@models/init"

const env = process.env.NODE_ENV || 'development';
const dbConfig = databaseConfiguration;

module.exports = {
    Sequelize: new Sequelize({
        host: dbConfig[env].host,
        dialect: 'mysql',
        port: 3306,
        logging: (msg) => logger.debug(msg),
        database: dbConfig[env].database,
        username: dbConfig[env].username,
        password: dbConfig[env].password,
        dialectModule: require('mysql2') // Masih menggunakan require karena mysql2 bukan modul ES6
    }),
    Models: init(new Sequelize({
        host: dbConfig[env].host,
        dialect: 'mysql',
        port: 3306,
        logging: (msg) => logger.debug(msg),
        database: dbConfig[env].database,
        username: dbConfig[env].username,
        password: dbConfig[env].password,
        dialectModule: require('mysql2') // Masih menggunakan require karena mysql2 bukan modul ES6
    }), DataTypes)
}