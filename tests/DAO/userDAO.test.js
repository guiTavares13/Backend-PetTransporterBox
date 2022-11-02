const User = require("../../src/DAO/userModelDAO");

const DUMMY_NAME = "DUMMY_NAME";
const DUMMY_DOC = "DUMMY_DOC";
const DUMMY_BIRTH = "10/02/2021";
const DUMMY_EMAIL = "DUMMY_EMAIL";
const DUMMY_PSW = "DUMMY_PSW";
const DUMMY_PHONE = "DUMMY_PHONE";
var USER_ID = ""

describe('Testes com USER DAO',()=>{

    test('Cadastro de usuario',async ()=>{
        auxUser = User.build({
            usuario_nome:DUMMY_NAME,
            usuario_documento: DUMMY_DOC,
            usuario_data_nascimento: DUMMY_BIRTH,
            usuario_telefone: DUMMY_PHONE,
            usuario_email: DUMMY_EMAIL,
            usuario_senha: DUMMY_PSW
        });

        data = await auxUser.save();
        
        USER_ID = data["usuario_id"];

    })

    test('Leitura do usuario',async ()=>{
        await User.findAll({where:{usuario_id:USER_ID}});
    })

    test('Remoção do usuario',async ()=>{
        await User.destroy({where:{usuario_id:USER_ID}});
    })

});