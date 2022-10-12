const tripModel = require("../../src/models/tripModel");


const DUMMY_BOX = "DUMMY_NAME";
const DUMMY_DATE = "10/02/2022";
const DUMMY_PET = "DUMMY_PET";




describe('Testes com model petLocation',()=>{

    test('validando cadastro',()=>{
        const model = new tripModel();

        model.box = DUMMY_BOX;
        model.date = DUMMY_DATE;
        model.pet = DUMMY_PET;

        expect(model.box).toBe(DUMMY_BOX);
        expect(model.date).toBe(DUMMY_DATE);
        expect(model.pet).toBe(DUMMY_PET);

    })
})