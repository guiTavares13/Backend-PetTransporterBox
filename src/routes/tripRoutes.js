const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');


routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    petId:Joi.string().required(),
                    caixaId:Joi.string().required(),
                    date:Joi.string().required()
                    })    
            }),(req,res)=>{
    
    
    res.status(201).send({status:"Cadastrado com sucesso"})
});



routes.get('/',(req,res)=>{
   
    res.status(200).send({trip:"fake"});
})

routes.get('/:tripId',(req,res)=>{

    res.status(200).send({trip:"fake"});
})

routes.put('/:tripId',celebrate({
    [Segments.BODY]:Joi.object({
                    petId:Joi.string().required(),
                    caixaId:Joi.string().required(),
                    date:Joi.string().required()
                         })    
            }),(req,res)=>{
    res.status(201).send("Atualizado com sucesso!");
})

routes.delete('/:tripId',(req,res)=>{
    res.status(200).send("Removido com sucesso!");
})

module.exports = routes;