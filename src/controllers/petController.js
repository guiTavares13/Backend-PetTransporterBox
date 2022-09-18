const PetModel = require('../models/petModel')
const petDAO = require('../DAO/petModelsDAO')

async function insertPet(req, res, pet)
{
    pet = petDAO.build({
        pet_nome:pet.name,
        pet_idade: pet.age,
        pet_raca: pet.race,
        pet_tipo: pet.type
    });

    try{
        await pet.save();         
        res.status(201).send({status:"Cadastrado com sucesso"})
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function getSinglePet(req, res, petId)
{
    try
    {
        const mPet = await petDAO.findAll({  where: {
            pet_id: petId
          }});
    
        res.status(200).send({mPet});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }

}

async function getPets(req, res)
{
    try
    {
        const pets = await petDAO.findAll();
        res.status(200).send({pets});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function deletePet(req, res, petId)
{
    try{
        await petDAO.destroy({
            where: {
                pet_id: petId
            }
          });

        res.status(200).send({status:"Removido com sucesso"});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function updatePet(req, res, petId, pet)
{
    try{
        await petDAO.update({
            pet_nome:pet.name,
            pet_idade: pet.age,
            pet_raca: pet.race,
            pet_type: pet.type
        },{
            where:{
                pet_id: petId
            }
        });
        res.status(200).send({status:"Atualizado com sucesso"});
    }
    catch(err)
    {
        res.status(500).send({status:`${err}`})
    }
}

module.exports = { insertPet, getSinglePet, getPets, deletePet, updatePet }