const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')

const db = require('./connection/database')

//rotas
const petRouters = require('./routes/petRoutes.js'); 
const userRoutes = require('./routes/userRoutes');
const boxRoutes = require('./routes/boxRoutes');
const boxModelRoutes = require('./routes/boxModelRoutes');
const tripRoutes = require('./routes/tripRoutes');
const measureRoutes = require('./routes/measureRoutes')
const healthRoutes = require('./routes/healthRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

//routes
app.use(`/api/v${process.env.API_VERSION}/pet`,petRouters);
app.use(`/api/v${process.env.API_VERSION}/user`,userRoutes);
app.use(`/api/v${process.env.API_VERSION}/caixa`,boxRoutes);
app.use(`/api/v${process.env.API_VERSION}/caixaModel`,boxModelRoutes);
app.use(`/api/v${process.env.API_VERSION}/trip`,tripRoutes);
app.use(`/api/v${process.env.API_VERSION}/measure`,measureRoutes);

app.use('/health',healthRoutes);

app.get('/', (req,res)=>{
    res.send("Rodando!!").status(200);
});

app.use(errors());


module.exports = app;