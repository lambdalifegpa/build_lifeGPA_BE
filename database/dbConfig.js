const knex = require('knex')('production');

const knexConfig = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(knexConfig[dbEnv]);
