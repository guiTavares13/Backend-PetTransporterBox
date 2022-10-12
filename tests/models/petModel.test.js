const petModel = require("../../src/models/petModel");


const DUMMY_NAME = "DUMMY_NAME";
const DUMMY_AGE = 20;
const DUMMY_BREED = "DUMMY_BREED";
const DUMMY_TYPE = "DUMMY_TYPE";


describe('Testes com model petLocation',()=>{

    test('validando cadastro',()=>{
        const model = new petModel();

        model.name = DUMMY_NAME;
        model.age = DUMMY_AGE;
        model.breed = DUMMY_BREED;
        model.type = DUMMY_TYPE;

        expect(model.name).toBe(DUMMY_NAME);
        expect(model.age).toBe(DUMMY_AGE);
        expect(model.breed).toBe(DUMMY_BREED);
        expect(model.type).toBe(DUMMY_TYPE);
    })
})