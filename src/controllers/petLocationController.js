const PetLocationModel = require('../models/petLocationModel')
const petLocationDAO = require('../DAO/petLocationDAO')

async function insertPetLocation(req, res, petLocation)
{
    petLocation = petLocationDAO.build({
        latitude: petLocation.latitude,
        longitude: petLocation.longitude
    });

    try{
        await petLocation.save();         
        res.status(201).send({status:"Cadastrado com sucesso"})
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function getSinglePetLocation(req, res, locationId)
{
    try
    {
        const mLocation = await petLocationDAO.findAll({  where: {
            localizacao_pet_id: locationId
          }});
    
        res.status(200).send({mLocation});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }

}

async function getPetLocations(req, res)
{
    try
    {
        const locations = await petLocationDAO.findAll();
        res.status(200).send({locations});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function deletePetLocation(req, res, locationId)
{
    try{
        await petLocationDAO.destroy({
            where: {
                localizacao_pet_id: locationId
            }
          });

        res.status(200).send({status:"Removido com sucesso"});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function updatePetLocation(req, res, locationId, location)
{
    try{
        await petLocationDAO.update({
            latitude:location.latitude,
            longitude: location.longitude
        },{
            where:{
                localizacao_pet_id: locationId
            }
        });
        res.status(200).send({status:"Atualizado com sucesso"});
    }
    catch(err)
    {
        res.status(500).send({status:`${err}`})
    }
}

module.exports = {insertPetLocation, getSinglePetLocation, getPetLocations, deletePetLocation, updatePetLocation}