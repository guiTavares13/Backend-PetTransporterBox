const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');

const UserController = require('../controllers/userController');
const User = require('../DAO/userModelDAO');
const UserParser = require('../parsers/userParser');

routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    nome:Joi.string().required(),
                    documento:Joi.string().required(),
                    lastName:Joi.string().required(),
                    email:Joi.string().required(),
                    nascimento: Joi.string().required(),
                    password:Joi.string().required(),
                    phone:Joi.string().required(),
                    userStatus: Joi.number().required()
                    })    
            }),async (req,res)=>{

                body = req.body;
            
                UserController.insertUser(req,res,UserParser.parseBody(body));
                


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


routes.get('/',async (req,res)=>{
    UserController.getUsers(req,res);
})

routes.get('/logout',(req,res)=>{
    console.log(`User logout!! `)
    res.status(200).send({status:"logout"});
})

routes.get('/:userId', async (req,res)=>{
    UserController.getSingleUser(req,res,req.params.userId);
})

routes.put('/:userId',celebrate({
    [Segments.BODY]:Joi.object({
                    nome:Joi.string().required(),
                    documento:Joi.string().required(),
                    lastName:Joi.string().required(),
                    email:Joi.string().required(),
                    phone:Joi.string().required(),
                    userStatus: Joi.number().required()
                    })    
            }),async (req,res)=>{

            body = req.body
            UserController.updateUser(req,res,req.params.userId,UserParser.parseBody(body));

})

routes.delete('/:userId',async (req,res)=>{
    UserController.deleteUser(req,res,req.params.userId);
})

module.exports = routes;
