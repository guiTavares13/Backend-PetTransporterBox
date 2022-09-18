const UserModel = require("../models/userModel");


function parseBody(body)
{
    retUser = new UserModel();

    retUser.name = body.nome;
    retUser.document = body.documento;
    retUser.birthday = body.nascimento;
    retUser.password = body.password;
    retUser.phone = body.phone;
    retUser.userStatus = body.userStatus;
    
    return retUser;

}

module.exports = {parseBody}