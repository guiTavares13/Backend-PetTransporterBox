const PetLocationModel = require("../models/petLocationModel");


function parseBody(body)
{
    retPetLocation = new PetLocationModel();

    retPetLocation.latitude = body.latitude;
    retPetLocation.longitude = body.longitude;
    
    return retPetLocation;

}

module.exports = {parseBody}