const Box = require("../../src/DAO/boxModelDAO");

const DUMMY_NAME = "DUMMY_NAME";
const DUMMY_TYPE = "DUMMY_TYPE";


var BOX_ID = ""

describe('Testes com Box Category DAO',()=>{

    test('Cadastro ',async ()=>{
        auxUser = Box.build({
            caixa_nome: DUMMY_NAME,
            tipo_caixa: DUMMY_TYPE,
        });

        data = await auxUser.save();
        
        BOX_ID = data["caixa_id"];

    })

    test('Leitura',async ()=>{
        result = await Box.findAll({where:{caixa_id:BOX_ID}});
        result = result[0].toJSON();

        expect(result.caixa_nome).toBe(DUMMY_NAME);
       
    })

    test('Remoção',async ()=>{
        await Box.destroy({where:{caixa_id:BOX_ID}});
    })

});