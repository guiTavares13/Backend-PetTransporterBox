require('dotenv/config');

const jwt = require('jsonwebtoken')
const client = require('./userController');

const Cripto = require('../crypto/criptoService');


module.exports = {


    async loadToken(req,res)
    {
        try{
            const {email,senha} = req.body;

            uPsw = await client.getPswByEmail(req,res,email);
    
            sucess = await Cripto.checkPsw(senha,uPsw);
            
            if(sucess)
            {
                return res.json({
                    token:jwt.sign({userId:email,level:1},process.env.MY_JWT_KEY,{
                        expiresIn:'15m'
                    })
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


