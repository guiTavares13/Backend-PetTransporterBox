const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');
const userModel = require('../models/userModel')

routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    nome:Joi.string().required(),
                    documento:Joi.string().required(),
                    lastName:Joi.string().required(),
                    email:Joi.string().required(),
                    password:Joi.string().required(),
                    phone:Joi.string().required(),
                    userStatus: Joi.number().required()
                    })    
            }),async (req,res)=>{

                body = req.body;

                /**
                 *  @TODO Criar parser para o body da requisição
                 * 
                 */
                user = userModel.build({
                                    usuario_nome:body.nome,
                                    usuario_documento: body.documento,
                                });
                
                try{
                    await user.save();
                    res.status(201).send({status:"Cadastrado com sucesso"})
                }
                catch(err){
                    res.status(500).send({status:`${err}`})
                }



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
    
    try
    {
        const users = await userModel.findAll();
        res.status(200).send({users});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
})

routes.get('/logout',(req,res)=>{
    console.log(`User logout!! `)
    res.status(200).send({status:"logout"});
})

routes.get('/:userId', async (req,res)=>{
    try
    {
        const mUser = await userModel.findAll({  where: {
            usuario_id: req.params.userId
          }});
    
        res.status(200).send({mUser});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
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

                /**
                 *  @TODO Criar parser para o body da requisição
                 * 
                 */
                try{
                    await userModel.update({
                        usuario_nome:body.nome,
                        usuario_documento: body.documento,
                    },{
                        where:{
                            usuario_id: req.params.userId
                        }
                    });

                    console.log("Update single user!!")
                    res.status(200).send({status:"Atualizado com sucesso"});
                }
                catch(err)
                {
                    res.status(500).send({status:`${err}`})
                }



})

routes.delete('/:userId',async (req,res)=>{
    try{
        await userModel.destroy({
            where: {
                usuario_id: req.params.userId
            }
          });

        res.status(200).send({status:"Removido com sucesso"});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }

})

module.exports = routes;
