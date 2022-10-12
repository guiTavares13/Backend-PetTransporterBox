const petLocation = require("../../src/models/petLocationModel");


const DUMMY_LAT = -23.477522;
const DUMMY_LONG = -47.855621;

describe('Testes com model petLocation',()=>{

    test('validando cadastro',()=>{
        const model = new petLocation();

        model.latitude = DUMMY_LAT;
        model.longitude = DUMMY_LONG;

        expect(model.latitude).toBe(DUMMY_LAT);
        expect(model.longitude).toBe(DUMMY_LONG);
    })
})