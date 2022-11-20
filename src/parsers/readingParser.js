const ReadingModel = require("../models/readingModel");


function parseBody(body)
{
    retReading = new ReadingModel();

    retReading.openDoor = body.openDoor;
    retReading.box = body.caixaId;
    retReading.date = body.date;
    retReading.petLocation = `${body.location.latitude},${body.location.longitude}`;
    retReading.petStatus = body.petState;
    
    return retReading;

}

module.exports = {parseBody}