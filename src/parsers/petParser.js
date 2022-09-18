const PetModel = require("../models/petModel");


function parseBody(body)
{
    retPet = new PetModel();

    retPet.name = body.name;
    retPet.age = body.age;
    retPet.breed = body.breed;
    retPet.type = body.category;
    
    return retPet;

}

module.exports = {parseBody}