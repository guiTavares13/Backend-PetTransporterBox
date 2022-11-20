const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');
const boxCategoryController = require('../controllers/boxCategoryController')
const BoxCategoryParser = require('../parsers/boxCategoryParser')


const authMiddleware = require('../middlewares/auth');

routes.use(authMiddleware.auth);

routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    nome:Joi.string().required(),
                    altura:Joi.number().required(),
                    largura:Joi.number().required(),
                    })    
            }),(req,res)=>{
                
                boxCategoryController.insertBoxCategory(req,res,BoxCategoryParser.parseBody(req.body))
});

routes.get('/:modelId',(req,res)=>{
    boxCategoryController.getSingleBoxCategory(req,res,req.params.modelId)
})

routes.get('/',(req,res)=>{
    boxCategoryController.getBoxCategories(req,res)
})

routes.put('/:modelId',celebrate({
    [Segments.BODY]:Joi.object({
                    id:Joi.string().required(),
                    nome:Joi.string().required(),
                    altura:Joi.number().required(),
                    largura:Joi.number().required(),
                    })    
            }),(req,res)=>{
        boxCategoryController.updateBoxCategory(req,res,req.params.modelId,BoxCategoryParser.parseBody(req.body))

    res.status(200).send({box:"fake"});
})

routes.delete('/:modelId',(req,res)=>{
    boxCategoryController.deleteBoxCategory(req,res,req.params.modelId)
})

module.exports = routes;
