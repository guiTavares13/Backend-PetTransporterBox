const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')

const db = require('./connection/database')

//rotas
const petRouters = require('./routes/petRoutes.js'); 
const userRoutes = require('./routes/userRoutes');
const boxRoutes = require('./routes/boxRoutes');
const boxModelRoutes = require('./routes/boxModelRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

//routes
app.use(`/api/v${process.env.API_VERSION}/pet`,petRouters);
app.use(`/api/v${process.env.API_VERSION}/user`,userRoutes);
app.use(`/api/v${process.env.API_VERSION}/caixa`,boxRoutes);
app.use(`/api/v${process.env.API_VERSION}/caixaModel`,boxModelRoutes);

app.use(errors());


//database test
db.authenticate().then(()=>{console.log(`Banco de dados conectado: ${process.env.DATABASE_SCHEMA}`)});
//db.sync(() => console.log(`Banco de dados conectado: ${process.env.DATABASE_SCHEMA}`));

module.exports = app;