const UserModel = require("../../src/models/userModel");


const DUMMY_NAME = "DUMMY_NAME";
const DUMMY_DOC = "10/02/2022";
const DUMMY_EMAIL = "DUMMY_EMAIL";
const DUMMY_PSW = "DUMMY_PSW";
const DUMMY_PHONE = "DUMMY_PHONE";
const DUMMY_STATUS = 1;



describe('Testes com model User',()=>{

    test('validando cadastro',()=>{
        const model = new UserModel();

        model.name = DUMMY_NAME;
        model.document = DUMMY_DOC;
        model.email = DUMMY_EMAIL;
        model.password = DUMMY_PSW;
        model.phone = DUMMY_PHONE;
        model.userStatus = DUMMY_STATUS;

        expect(model.name).toBe(DUMMY_NAME);
        expect(model.document).toBe(DUMMY_DOC);
        expect(model.email).toBe(DUMMY_EMAIL);
        expect(model.password).toBe(DUMMY_PSW);
        expect(model.phone).toBe(DUMMY_PHONE);
        expect(model.userStatus).toBe(DUMMY_STATUS);

    })
})