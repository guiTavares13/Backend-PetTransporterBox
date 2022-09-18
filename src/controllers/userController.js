const UserModel = require('../models/userModel')
const userDAO = require('../DAO/userModelDAO')

async function insertUser(req,res,user)
{
    user = userDAO.build({
        usuario_nome:user.name,
        usuario_documento: user.document,
        usuario_data_nascimento: user.birthday,
        usuario_telefone: user.phone,
        usuario_email: user.email
    });

    try{
        await user.save();         
        res.status(201).send({status:"Cadastrado com sucesso"})
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function getSingleUser(req,res,userId)
{
    try
    {
        const mUser = await userDAO.findAll({  where: {
            usuario_id: userId
          }});
    
        res.status(200).send({mUser});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }

}

async function getUsers(req,res)
{
    try
    {
        const users = await userDAO.findAll();
        res.status(200).send({users});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function deleteUser(req,res,userId)
{
    try{
        await userDAO.destroy({
            where: {
                usuario_id: userId
            }
          });

        res.status(200).send({status:"Removido com sucesso"});
    }
    catch(err){
        res.status(500).send({status:`${err}`})
    }
}

async function updateUser(req,res,userId,user)
{
    try{
        await userDAO.update({
            usuario_nome:user.name,
            usuario_documento: user.document,
            usuario_data_nascimento: user.birthday,
            usuario_telefone: user.phone,
            usuario_email: user.email
        },{
            where:{
                usuario_id: userId
            }
        });
        res.status(200).send({status:"Atualizado com sucesso"});
    }
    catch(err)
    {
        res.status(500).send({status:`${err}`})
    }
}

module.exports = {insertUser,getSingleUser,getUsers,deleteUser,updateUser}