const BoxModel = require('../models/boxModel')
const boxDAO = require('../DAO/boxModelDAO')

async function insertBox(req, res, box)
{
    box = boxDAO.build({
        caixa_nome:box.name,
        tipo_caixa: box.type
    });

    try{
        await box.save();         
        res.status(201).send({status:"Cadastrado com sucesso"})
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
        const boxes = await boxDAO.findAll();
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