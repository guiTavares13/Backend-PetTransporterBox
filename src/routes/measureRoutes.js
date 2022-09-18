const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');


routes.post('/:tripId',celebrate({
    [Segments.BODY]:Joi.object({
                    openDoor:Joi.boolean().required(),
                    caixaId:Joi.string().required(),
                    date:Joi.string().required(),
                    location: Joi.object({latitude:Joi.number().required(),longitude:Joi.number().required()}).required(),
                    petState: Joi.string().required()
                    })    
            }),(req,res)=>{
    
    
    res.status(201).send({status:"Cadastrado com sucesso"})
});



routes.get('/:tripId',(req,res)=>{
   
    res.status(200).send({measure:"fake"});
})

routes.get('/:measureId',(req,res)=>{

    res.status(200).send({trip:"fake"});
})

module.exports = routes;