const express = require('express');
const routes = express.Router();

routes.post('/',(req,res)=>{
    console.log("Caixa cadastrada com sucesso!!")
    res.status(201).send({status:"Cadastrado com sucesso"})
});

routes.get('/:modelId',(req,res)=>{
    console.log("Get single model!!")
    res.status(200).send({box:"fake"});
})

routes.put('/:modelId',(req,res)=>{
    console.log("Update single model!!")
    res.status(200).send({box:"fake"});
})

routes.delete('/:modelId',(req,res)=>{
    console.log("Delete single model!!")
    res.status(200).send({box:"fake"});
})

module.exports = routes;
