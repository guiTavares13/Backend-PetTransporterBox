const express = require('express');
const routes = express.Router();

routes.post('/',(req,res)=>{
    console.log("Caixa cadastrada com sucesso!!")
    res.status(201).send({status:"Cadastrado com sucesso"})
});

routes.post('/link/:caixaId',(req,res)=>{
    console.log("Caixa linkada com sucesso!!")
    res.status(201).send({status:"Cadastrado com sucesso"})
});

routes.get('/:caixaId',(req,res)=>{
    console.log("Get single box!!")
    res.status(200).send({box:"fake"});
})

routes.put('/:caixaId',(req,res)=>{
    console.log("Update single box!!")
    res.status(200).send({box:"fake"});
})

routes.delete('/:caixaId',(req,res)=>{
    console.log("Delete single box!!")
    res.status(200).send({box:"fake"});
})

module.exports = routes;
