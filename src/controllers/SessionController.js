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
    
            //inserir validação de User(MAC) e password(PASS HASH)
            /*client.isValidLogin(email,senha).then((user)=>{
    
                return res.json({
                    token:jwt.sign({userId:user.idClient,level:user.level},process.env.MY_JWT_KEY,{
                        expiresIn:'15m'
                    })
                }).status(200);
            }).catch(err=>{
                console.log(`erro: ${err}`)
                return res.status(401).json('user not found');
            });*/
    
            //Aprove all login attempts
    
            console.log(`senha: ${senha} - hash: ${uPsw}`);
            sucess = await Cripto.checkPsw(senha,uPsw);
            console.log(sucess);
            
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
                return res.send({status:"Login inválido"}).status(404)
            }
    
        }
        catch{
            return res.send({status:"Login inválido"}).status(404)
        }
       

    }

}


