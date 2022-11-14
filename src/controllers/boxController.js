const BoxModel = require('../models/boxModel')
const boxDAO = require('../DAO/boxModelDAO')
const sequelize = require('../connection/database');
const Uuid = require('../utils/UuidGenerator');

async function insertBox(req, res, box)
{
    try{
        await sequelize.query("CALL proc_add_caixa ( :p_caixa_id, :p_caixa_nome, :p_tipo_caixa, :p_user_id) ",
        {replacements:{p_caixa_id: Uuid.create_UUID(),p_caixa_nome:box.name,p_tipo_caixa: box.type, p_user_id: req.idCliente}})    
        res.status(201).send({status:"Cadastrado com sucesso"});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function getSingleBox(req, res, boxId)
{
    try
    {
        const mBox = await boxDAO.findAll({  where: {
            caixa_id: boxId
          }});
    
        res.status(200).send({mBox});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }

}

async function getBoxes(req, res)
{
    try
    {
        //const boxes = await boxDAO.findAll();
        //res.status(200).send({boxes});

        const boxes = await sequelize.query("CALL proc_get_caixas_user (:p_user_id);",
        {replacements:{ p_user_id:req.idCliente}});    

        res.status(200).send({boxes});
        
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function deleteBox(req, res, boxId)
{
    try{
        await boxDAO.destroy({
            where: {
                caixa_id: boxId
            }
          });

        res.status(200).send({status:"Removido com sucesso"});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function updateBox(req, res, boxId, box)
{
    try{
        await boxDAO.update({
            caixa_nome:box.name,
            tipo_caixa: box.type
        },{
            where:{
                caixa_id: boxId
            }
        });
        res.status(200).send({status:"Atualizado com sucesso"});
    }
    catch(err)
    {
        res.status(500).send({status:`${err}`})
    }
}

module.exports = { insertBox, getSingleBox, getBoxes, deleteBox, updateBox }