const mysql = require('mysql2/promise');

require('dotenv/config');

var pool = mysql.createPool({
    host     : process.env.DATABASE_HOST ? process.env.DATABASE_HOST : 'localhost',
    port:  process.env.DATABASE_PORT ? process.env.DATABASE_PORT : '3306',
    user     : process.env.DATABASE_USER ? process.env.DATABASE_USER : 'root',
    password : process.env.DATABASE_PASS ? process.env.DATABASE_PASS : 'root',
    database : process.env.DATABASE_SCHEMA ? process.env.DATABASE_SCHEMA  : 'default'
  });
   
  exports.pool = pool;