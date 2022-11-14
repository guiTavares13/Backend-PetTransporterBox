const PetModel = require('../models/petModel');
const petDAO = require('../DAO/petModelsDAO');
const petTypeDAO = require('../DAO/petTypeDAO');
const sequelize = require('../connection/database');
const Uuid = require('../utils/UuidGenerator');

async function insertPet(req, res, pet,userId)
{
    try{

        await sequelize.query("CALL proc_add_pet ( :p_pet_id, :p_pet_nome, :p_pet_idade, :p_pet_raca, :p_pet_tipo, :p_user_id) ",
                           {replacements:{p_pet_id:Uuid.create_UUID(),p_pet_nome:pet.name,p_pet_idade: pet.age, p_pet_raca: pet.breed,p_pet_tipo: pet.type, p_user_id:userId}})    
       res.status(201).send({status:"Cadastrado com sucesso"})
   }
   catch(err){
       console.log(err);
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
        const pets = await sequelize.query("CALL proc_get_pets_user (:p_user_id);",
        {replacements:{ p_user_id:req.idCliente}});    

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
            pet_raca: pet.breed,
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

async function getTypes(req,res)
{
    try
    {
        const types = await petTypeDAO.findAll();
    
        res.status(200).send({types});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }

}

module.exports = { insertPet, getSinglePet, getPets, deletePet, updatePet,getTypes }