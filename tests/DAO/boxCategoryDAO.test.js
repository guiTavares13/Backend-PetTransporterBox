const Box = require("../../src/DAO/boxCategoryDAO");

const DUMMY_NAME = "DUMMY_NAME";
const DUMMY_HEIGHT = 1.25;
const DUMMY_WEIGHT = 7.51;

var BOX_ID = ""

describe('Testes com Box Category DAO',()=>{

;

    test('Cadastro', async ()=>{
        auxUser = Box.build({
            caixa_nome: DUMMY_NAME,
            caixa_altura: DUMMY_HEIGHT,
            caixa_largura: DUMMY_WEIGHT
        });

        data = await auxUser.save();
        
        BOX_ID = data["tipo_caixa_id"];

    })

    test('Leitura',async ()=>{
        result = await Box.findAll({where:{tipo_caixa_id:BOX_ID}});
        result = result[0].toJSON();

        expect(result.caixa_nome).toBe(DUMMY_NAME);
       
    })

    test('Remoção',async ()=>{
        await Box.destroy({where:{tipo_caixa_id:BOX_ID}});
    })

});