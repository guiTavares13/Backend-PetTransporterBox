
/*const { Sequelize } = require('sequelize');

require('dotenv/config');

const dbName = process.env.DATABASE_SCHEMA;
const dbUser = process.env.DATABASE_USER;
const dbHost = process.env.DATABASE_HOST;
const dbPassword = process.env.DATABASE_PASS;


const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  //passar os dados para o sequelize
  dialect: "mysql", //informar o tipo de banco que vamos utilizar
  host: dbHost, //o host, neste caso estamos com um banco local
});

module.exports = sequelize;
*/

//GCP SQL Intranet connection
const { Sequelize } = require('sequelize');

require('dotenv/config');

const dbName = process.env.DATABASE_SCHEMA;
const dbUser = process.env.DATABASE_USER;
const dbHost = `/cloudsql/${process.env.DATABASE_GCP_INSTANCE}`
const dbPassword = process.env.DATABASE_PASS;


const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  //passar os dados para o sequelize
  dialect: "mysql", //informar o tipo de banco que vamos utilizar
  host: dbHost, //o host, neste caso estamos com um banco local
  dialectOptions:{
    socketPath: `/cloudsql/${process.env.DATABASE_GCP_INSTANCE}`
  }
});

module.exports = sequelize;
