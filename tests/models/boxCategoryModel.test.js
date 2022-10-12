const boxCategoryModel = require("../../src/models/boxCategoryModel");

const DUMMY_NAME = "DUMMY_NAME";
const DUMMY_HEIGHT = 1.85;
const DUMMY_WIDTH = 45.5;

describe('Testes com model boxCategory',()=>{

    test('validando cadastro',()=>{
        const model = new boxCategoryModel();

        model.name = DUMMY_NAME;
        model.height = DUMMY_HEIGHT;
        model.width = DUMMY_WIDTH;

        expect(model.name).toBe(DUMMY_NAME);
        expect(model.height).toBe(DUMMY_HEIGHT);
        expect(model.width).toBe(DUMMY_WIDTH);
    })
})