const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');


routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    name:Joi.string().required(),
                    bread:Joi.string().required(),
                    category:Joi.string().required(),
                    })    
            }),(req,res)=>{
    console.log("Pet cadastrado com sucesso!!")
    res.status(201).send({status:"Cadastrado com sucesso"})
});


routes.post('/link/:petId',celebrate({
    [Segments.BODY]:Joi.object({
                    userId:Joi.string().required()
                    })    
            }),(req,res)=>{
    console.log("Pet linkado com sucesso!!")
    res.status(201).send({status:"Link realizado com sucesso"})
});

routes.get('/',(req,res)=>{
    console.log("Get pet!!")
    res.status(200).send({pet:"fake"});
})

routes.get('/:petId',(req,res)=>{
    console.log(`Get single pet!! `)
    console.log(req.params)
    res.status(200).send({pet:"fake"});
})

routes.put('/:petId',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    name:Joi.string().required(),
                    bread:Joi.string().required(),
                    category:Joi.string().required(),
                    })    
            }),(req,res)=>{
    console.log("Update single pet!!")
    res.status(200).send({pet:"fake"});
})

routes.delete('/:petId',(req,res)=>{
    console.log("Delete single pet!!")
    res.status(200).send({pet:"fake"});
})

module.exports = routes;