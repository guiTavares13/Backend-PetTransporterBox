const TripModel = require("../models/tripModel");


function parseBody(body)
{
    retTrip = new TripModel();

    retTrip.pet = body.petId;
    retTrip.box = body.caixaId;
    retTrip.date = body.date;
    
    return retTrip;

}

module.exports = {parseBody}