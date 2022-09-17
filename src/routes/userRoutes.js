const express = require('express');
const routes = express.Router();

routes.post('/',(req,res)=>{
    console.log("Usuario cadastrado com sucesso!!")
    res.status(201).send({status:"Cadastrado com sucesso"})
});


routes.post('/login',(req,res)=>{
    console.log("Login!!")
    res.status(201).send({status:"Login realizado com sucesso"})
});

routes.get('/',(req,res)=>{
    console.log("Get pet!!")
    res.status(200).send({pet:"fake"});
})

routes.get('/logout',(req,res)=>{
    console.log(`User logout!! `)
    res.status(200).send({status:"logout"});
})

routes.get('/:userId',(req,res)=>{
    console.log(`Get single User !! `)
    res.status(200).send({user:"teste"});
})

routes.put('/:userId',(req,res)=>{
    console.log("Update single user!!")
    res.status(200).send({pet:"fake"});
})

routes.delete('/:userId',(req,res)=>{
    console.log("Delete single user!!")
    res.status(200).send({pet:"fake"});
})

module.exports = routes;
