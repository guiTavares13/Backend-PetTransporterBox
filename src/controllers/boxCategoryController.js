const BoxCategoryModel = require('../models/boxCategoryModel')
const boxCategoryDAO = require('../DAO/boxCategoryDAO')

async function insertBoxCategory(req, res, boxCategory)
{
    boxCategory = boxCategoryDAO.build({
        caixa_nome:boxCategory.name,
        caixa_altura: boxCategory.height,
        caixa_largura: boxCategory.width
    });

    try{
        await boxCategory.save();         
        res.status(201).send({status:"Cadastrado com sucesso"})
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function getSingleBoxCategory(req, res, boxCategoryId)
{
    try
    {
        const mBoxCategory = await boxCategoryDAO.findAll({  where: {
            tipo_caixa_id: boxCategoryId
          }});
    
        res.status(200).send({mBoxCategory});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }

}



async function getBoxCategories(req, res)
{
    try
    {
        const boxCategories = await boxCategoryDAO.findAll();
        res.status(200).send({boxCategories});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function deleteBoxCategory(req, res, boxCategoryId)
{
    try{
        await boxCategoryDAO.destroy({
            where: {
                tipo_caixa_id: boxCategoryId
            }
          });

        res.status(200).send({status:"Removido com sucesso"});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function updateBoxCategory(req, res, boxCategoryId, boxCategory)
{
    try{
        await boxCategoryDAO.update({
            caixa_nome:boxCategory.name,
            caixa_altura: boxCategory.height,
            caixa_largura: boxCategory.width
        },{
            where:{
                tipo_caixa_id: boxCategoryId
            }
        });
        res.status(200).send({status:"Atualizado com sucesso"});
    }
    catch(err)
    {
        res.status(500).send({status:`${err}`})
    }
}

module.exports = {insertBoxCategory, getSingleBoxCategory, getBoxCategories, deleteBoxCategory, updateBoxCategory}