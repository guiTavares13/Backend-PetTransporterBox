const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');

routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    nome:Joi.string().required(),
                    documento:Joi.string().required(),
                    lastName:Joi.string().required(),
                    email:Joi.string().required(),
                    senha:Joi.string().required(),
                    phone:Joi.string().required(),
                    userStatus: Joi.number().required()
                    })    
            }),(req,res)=>{
    console.log("Usuario cadastrado com sucesso!!")
    res.status(201).send({status:"Cadastrado com sucesso"})
});


routes.post('/login',celebrate({
    [Segments.BODY]:Joi.object({
                    email:Joi.string().required(),
                    senha:Joi.string().required()
                    })    
            }),(req,res)=>{
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

routes.put('/:userId',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    nome:Joi.string().required(),
                    documento:Joi.string().required(),
                    lastName:Joi.string().required(),
                    email:Joi.string().required(),
                    phone:Joi.string().required(),
                    userStatus: Joi.number().required()
                    })    
            }),(req,res)=>{
    console.log("Update single user!!")
    res.status(200).send({pet:"fake"});
})

routes.delete('/:userId',(req,res)=>{
    console.log("Delete single user!!")
    res.status(200).send({pet:"fake"});
})

module.exports = routes;
