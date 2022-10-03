const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');

const boxController = require('../controllers/boxController')
const BoxParser = require('../parsers/boxParser')

const authMiddleware = require('../middlewares/auth');

routes.use(authMiddleware.auth);


routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    nome:Joi.string().required(),
                    idModelo:Joi.string().required(),
                    })    
            }),(req,res)=>{

                boxController.insertBox(req,res,BoxParser.parseBody(req.body))  
});

routes.post('/link/:caixaId',celebrate({
    [Segments.BODY]:Joi.object({
                    userId:Joi.string().required()
                    })    
            }),(req,res)=>{
                
            //fake route
            res.send("Linkado com sucesso!").status(201);
});

routes.get('/:caixaId',(req,res)=>{

    boxController.getSingleBox(req,res,req.params.caixaId)  

});

routes.get('/',(req,res)=>{

    boxController.getBoxes(req,res)  

})

routes.put('/:caixaId',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    nome:Joi.string().required(),
                    idModelo:Joi.string().required(),
                    })    
            }),(req,res)=>{

        boxController.updateBox(req,res,req.params.caixaId,BoxParser.parseBody(req.body))  


})

routes.delete('/:caixaId',(req,res)=>{

    boxController.deleteBox(req,res,req.params.caixaId)  

})

module.exports = routes;
