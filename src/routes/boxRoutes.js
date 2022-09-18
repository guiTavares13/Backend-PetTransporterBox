const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');

routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    nome:Joi.string().required(),
                    idModelo:Joi.string().required(),
                    })    
            }),(req,res)=>{
    console.log("Caixa cadastrada com sucesso!!")
    res.status(201).send({status:"Cadastrado com sucesso"})
});

routes.post('/link/:caixaId',celebrate({
    [Segments.BODY]:Joi.object({
                    userId:Joi.string().required()
                    })    
            }),(req,res)=>{
    console.log("Caixa linkada com sucesso!!")
    res.status(201).send({status:"Cadastrado com sucesso"})
});

routes.get('/:caixaId',(req,res)=>{
    console.log("Get single box!!")
    res.status(200).send({box:"fake"});
})

routes.put('/:caixaId',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    nome:Joi.string().required(),
                    idModelo:Joi.string().required(),
                    })    
            }),(req,res)=>{
    console.log("Update single box!!")
    res.status(200).send({box:"fake"});
})

routes.delete('/:caixaId',(req,res)=>{
    console.log("Delete single box!!")
    res.status(200).send({box:"fake"});
})

module.exports = routes;
