const BoxModel = require("../models/boxModel");


function parseBody(body)
{
    retBox = new BoxModel();

    retBox.name = body.nome;
    retBox.type = body.idModelo;
    
    return retBox;

}

module.exports = {parseBody}