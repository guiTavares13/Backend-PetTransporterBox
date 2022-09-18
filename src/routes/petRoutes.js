const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');

const PetController = require('../controllers/petController')
const PetParser = require('../parsers/petParser')

routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    name:Joi.string().required(),
                    age:Joi.string().required(),
                    breed:Joi.string().required(),
                    category:Joi.string().required(),
                    })    
            }),(req,res)=>{
        PetController.insertPet(req,res,PetParser.parseBody(req.body));
});


routes.post('/link/:petId',celebrate({
    [Segments.BODY]:Joi.object({
                    userId:Joi.string().required()
                    })    
            }),(req,res)=>{
    /**
     * @TODO Criar controler para fazer o link entre as entidades
     */
    res.status(201).send({status:"Link realizado com sucesso"});
});

routes.get('/',(req,res)=>{
    PetController.getPets(req,res);
})

routes.get('/:petId',(req,res)=>{
    PetController.getSinglePet(req,res,req.params.petId);
})

routes.put('/:petId',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    name:Joi.string().required(),
                    age:Joi.string().required(),
                    breed:Joi.string().required(),
                    category:Joi.string().required(),
                    })    
            }),(req,res)=>{
    PetController.updatePet(req,res,req.params.petId,PetParser.parseBody(req.body));

})

routes.delete('/:petId',(req,res)=>{
    PetController.deletePet(req,res,req.params.petId);

})

module.exports = routes;