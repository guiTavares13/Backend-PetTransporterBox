
const { Sequelize } = require('sequelize');

require('dotenv/config');

var dbName = process.env.DATABASE_SCHEMA;
var dbUser = process.env.DATABASE_USER;
var dbHost = process.env.DATABASE_HOST;
var dbPassword = process.env.DATABASE_PASS;



if(process.env.DATABASE_GCP_INSTANCE)
{
    dbHost = `/cloudsql/${process.env.DATABASE_GCP_INSTANCE}`

    const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
      //passar os dados para o sequelize
      dialect: "mysql", //informar o tipo de banco que vamos utilizar
      host: dbHost, //o host, neste caso estamos com um banco local
      dialectOptions:{
        socketPath: `/cloudsql/${process.env.DATABASE_GCP_INSTANCE}`
      }
    });

    module.exports = sequelize;

}
else
{
    const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
      //passar os dados para o sequelize
      dialect: "mysql", //informar o tipo de banco que vamos utilizar
      host: dbHost, //o host, neste caso estamos com um banco local
    });

    module.exports = sequelize;

}