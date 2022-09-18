require('dotenv/config');

const jwt = require('jsonwebtoken')
const client = require('./userController');


module.exports = {


    async loadToken(req,res)
    {
        const {email,senha} = req.body;

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

        return res.json({
            token:jwt.sign({userId:email,level:1},process.env.MY_JWT_KEY,{
                expiresIn:'15m'
            })
        }).status(200);
    }

}


