const BoxCategoryModel = require("../models/boxCategoryModel");


function parseBody(body)
{
    retBoxCategory = new BoxCategoryModel();

    retBoxCategory.name = body.nome;
    retBoxCategory.height = body.altura;
    retBoxCategory.width = body.largura;
    
    return retBoxCategory;

}

module.exports = {parseBody}