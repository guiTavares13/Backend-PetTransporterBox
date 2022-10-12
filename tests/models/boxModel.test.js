const boxModel = require("../../src/models/boxModel");


const DUMMY_NAME = "DUMMY_NAME";
const DUMMY_TYPE = "DUMMY_TYPE";

describe('Testes com model box',()=>{

    test('validando cadastro',()=>{
        const model = new boxModel();

        model.name = DUMMY_NAME;
        model.type = DUMMY_TYPE;

        expect(model.name).toBe(DUMMY_NAME);
        expect(model.type).toBe(DUMMY_TYPE);
    })
})