const TripModel = require('../models/tripModel')
const tripDAO = require('../DAO/tripDAO')

async function insertTrip(req, res, trip)
{
    trip = tripDAO.build({
        pet: trip.pet,
        caixa: trip.box,
        viagem_data: trip.date
    });

    try{
        await trip.save();         
        res.status(201).send({status:"Cadastrado com sucesso"})
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function getSingleTrip(req, res, tripId)
{
    try
    {
        const mTrip = await tripDAO.findAll({  where: {
            viagem_id: tripId
          }});
    
        res.status(200).send({mTrip});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }

}

async function getTrips(req, res)
{
    try
    {
        const trips = await tripDAO.findAll();
        res.status(200).send({trips});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function deleteTrip(req, res, tripId)
{
    try{
        await tripDAO.destroy({
            where: {
                viagem_id: tripId
            }
          });

        res.status(200).send({status:"Removido com sucesso"});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function updateTrip(req, res, tripId, trip)
{
    try{
        await tripDAO.update({
            pet: trip.pet,
            caixa: trip.box,
            viagem_data: trip.date
        },{
            where:{
                viagem_id: tripId
            }
        });
        res.status(200).send({status:"Atualizado com sucesso"});
    }
    catch(err)
    {
        res.status(500).send({status:`${err}`})
    }
}

module.exports = { insertTrip, getSingleTrip, getTrips, deleteTrip, updateTrip }