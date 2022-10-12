const readingModel = require("../../src/models/readingModel");


const DUMMY_BOX = "DUMMY_NAME";
const DUMMY_DATE = "10/02/2022";
const DUMMY_DOOR = false;
const DUMMY_LOCATION = "DUMMY_LOCATION_ID";
const DUMMY_STATUS = "DUMMY_STATUS";
const DUMMY_TRIP_ID = "DUMMY_TRIP_ID"



describe('Testes com model petLocation',()=>{

    test('validando cadastro',()=>{
        const model = new readingModel();

        model.box = DUMMY_BOX;
        model.date = DUMMY_DATE;
        model.openDoor = DUMMY_DOOR;
        model.petLocation = DUMMY_LOCATION;
        model.petStatus = DUMMY_STATUS
        model.trip = DUMMY_TRIP_ID

        expect(model.box).toBe(DUMMY_BOX);
        expect(model.date).toBe(DUMMY_DATE);
        expect(model.openDoor).toBe(DUMMY_DOOR);
        expect(model.petLocation).toBe(DUMMY_LOCATION);
        expect(model.petStatus).toBe(DUMMY_STATUS);
        expect(model.trip).toBe(DUMMY_TRIP_ID);

    })
})