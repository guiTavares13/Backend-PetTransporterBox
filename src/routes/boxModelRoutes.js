const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');

routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    nome:Joi.string().required(),
                    altura:Joi.number().required(),
                    largura:Joi.number().required(),
                    })    
            }),(req,res)=>{
    console.log("Caixa cadastrada com sucesso!!")
    res.status(201).send({status:"Cadastrado com sucesso"})
});

routes.get('/:modelId',(req,res)=>{
    console.log("Get single model!!")
    res.status(200).send({box:"fake"});
})

routes.put('/:modelId',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    nome:Joi.string().required(),
                    altura:Joi.number().required(),
                    largura:Joi.number().required(),
                    })    
            }),(req,res)=>{
    console.log("Update single model!!")
    res.status(200).send({box:"fake"});
})

routes.delete('/:modelId',(req,res)=>{
    console.log("Delete single model!!")
    res.status(200).send({box:"fake"});
})

module.exports = routes;
