const express = require('express');
const routes = express.Router();


routes.get('/',(req,res)=>{
    res.send({apiVersion:process.env.API_VERSION}).status(200);
});

module.exports = routes;
