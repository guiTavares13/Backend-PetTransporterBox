const ReadingModel = require('../models/readingModel')
const readingDAO = require('../DAO/readingDAO')

async function insertReading(req, res, reading)
{
    reading = readingDAO.build({
        leitura_data:reading.date,
        leitura_porta_aberta: reading.openDoor,
        viagem: req.params.tripId,
        estado_pet: reading.petStatus,
        localizacao: reading.petLocation
    });

    try{
        await reading.save();         
        res.status(201).send({status:"Cadastrado com sucesso"})
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function getSingleReading(req, res, readingId)
{
    try
    {
        const mReading = await readingDAO.findAll({  where: {
            leitura_id: readingId
          }});
    
        res.status(200).send({mReading});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }

}

async function getReadings(req, res)
{
    try
    {
        const readings = await readingDAO.findAll({where: {
            viagem: req.params.tripId
          }});
        res.status(200).send({readings});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function deleteReading(req, res, readingId)
{
    try{
        await readingDAO.destroy({
            where: {
                leitura_id: readingId
            }
          });

        res.status(200).send({status:"Removido com sucesso"});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function updateReading(req, res, readingId, reading)
{
    try{
        await readingDAO.update({
            leitura_data:reading.date,
            leitura_porta_aberta: reading.openDoor,
            viagem: reading.trip,
            estado_pet: reading.petStatus,
            caixa: reading.box,
            localizacao: reading.petLocation
        },{
            where:{
                leitura_id: readingId
            }
        });
        res.status(200).send({status:"Atualizado com sucesso"});
    }
    catch(err)
    {
        res.status(500).send({status:`${err}`})
    }
}

module.exports = { insertReading, getSingleReading, getReadings, deleteReading, updateReading}