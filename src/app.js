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
app.use(errors());

//routes
app.use('/pet',petRouters);
app.use('/user',userRoutes);
app.use('/caixa',boxRoutes);
app.use('/caixaModel',boxModelRoutes);


//database test
db.authenticate().then(()=>{console.log(`Banco de dados conectado: ${process.env.DATABASE_SCHEMA}`)});
//db.sync(() => console.log(`Banco de dados conectado: ${process.env.DATABASE_SCHEMA}`));

module.exports = app;