const express = require('express');
const cors = require('cors');

const petRouters = require('./routes/petRoutes.js'); 
const userRoutes = require('./routes/userRoutes');
const boxRoutes = require('./routes/boxRoutes');
const boxModelRoutes = require('./routes/boxModelRoutes');

const app = express();

//routes
app.use('/pet',petRouters)
app.use('/user',userRoutes)
app.use('/caixa',boxRoutes)
app.use('/caixaModel',boxModelRoutes)

//app.use(cors());
app.use(express.json());



app.set('view engine', 'ejs');


module.exports = app;