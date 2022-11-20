const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi, CelebrateError} = require('celebrate');

const TripController = require('../controllers/tripController')
const TripParser = require('../parsers/tripParser')

const authMiddleware = require('../middlewares/auth');

routes.use(authMiddleware.auth);

routes.post('/',celebrate({
    [Segments.BODY]:Joi.object({
                    petId:Joi.string().required(),
                    caixaId:Joi.string().required(),
                    date:Joi.string().required()
                    })    
            }),(req,res)=>{
    
    
        TripController.insertTrip(req,res,TripParser.parseBody(req.body));
});



routes.get('/pet/:petId', (req,res)=>{
   TripController.getTripsByPet(req,res,req.params.petId);
})

routes.get('/:tripId',(req,res)=>{

    TripController.getSingleTrip(req,res,req.params.tripId);
})

routes.put('/:tripId',celebrate({
    [Segments.BODY]:Joi.object({
                    petId:Joi.string().required(),
                    caixaId:Joi.string().required(),
                    date:Joi.string().required()
                         })    
            }),(req,res)=>{
    TripController.updateTrip(req,res,req.params.tripId,TripParser.parseBody(req.params));
})

routes.delete('/:tripId',(req,res)=>{
    TripController.deleteTrip(req,res,req.params.tripId);
})

module.exports = routes;