require('dotenv/config');

const jwt = require('jsonwebtoken')
const client = require('./userController');

const Cripto = require('../crypto/criptoService');
const userDAO = require('../DAO/userModelDAO');

module.exports = {


    async loadToken(req,res)
    {
        try{
            const {email,senha} = req.body;

            const userAux = await userDAO.findAll({  where: {
                usuario_email: email
              }});
        

            //uPsw = await client.getPswByEmail(req,res,email);
 
            sucess = await Cripto.checkPsw(senha,userAux[0].usuario_senha);
            
            if(sucess)
            {
                userJson = await userAux[0].toJSON();

                delete userJson.usuario_senha;

                return res.json({
                    token:jwt.sign({userId:email,level:1},process.env.MY_JWT_KEY,{
                        expiresIn:'15m'
                    }),
                    user:userJson
                }).status(200);
            }
            else
            {
                return res.status(404).send({status:"Login inválido"})
            }
    
        }
        catch{
            return res.status(404).send({status:"Login inválido"})
        }
       

    }

}


