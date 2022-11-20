const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');

const readingController = require('../controllers/readingController')
const ReadingParser = require('../parsers/readingParser')


const authMiddleware = require('../middlewares/auth');

routes.use(authMiddleware.auth);


routes.post('/:tripId',celebrate({
    [Segments.BODY]:Joi.object({
                    openDoor:Joi.boolean().required(),
                    date:Joi.string().required(),
                    location: Joi.object({latitude:Joi.number().required(),longitude:Joi.number().required()}).required(),
                    petState: Joi.string().required()
                    })    
            }),(req,res)=>{
    
                readingController.insertReading(req,res,ReadingParser.parseBody(req.body))
});



routes.get('/:tripId',(req,res)=>{
    /**
     * @TODO Buscar todas as leituras da viagem escolhida
     * 
     * */
    //readingController.getSingleReading(req,res,req.params.tripId)
    res.send("Rota fake").status(200);

})

routes.get('/:measureId',(req,res)=>{

    readingController.getSingleReading(req,res,req.params.tripId)

})

module.exports = routes;