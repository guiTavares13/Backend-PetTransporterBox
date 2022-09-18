const PetModel = require("../models/petModel");


function parseBody(body)
{
    retPet = new PetModel();

    retPet.name = body.name;
    retPet.breed = body.breed;
    retPet.category = body.category;
    
    return retPet;

}

module.exports = {parseBody}