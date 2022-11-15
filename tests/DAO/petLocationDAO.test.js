describe("Dummy", ()=>{
    test('dummy',()=>{
        expect(1).toBe(1);
    })
})
/*const Pet = require("../../src/DAO/petLocationDAO");

const DUMMY_LAT = -23.54478;
const DUMMY_LOG = -48.21147;


var PET_ID = ""

describe('Testes com Box Category DAO',()=>{

    test('Cadastro ',async ()=>{
        auxPet = Pet.build({
            latitude: DUMMY_LAT,
            longitude: DUMMY_LOG,
        });

        data = await auxPet.save();
        
        PET_ID = data["localizacao_pet_id"];

    })

    test('Leitura',async ()=>{
        result = await Pet.findAll({where:{localizacao_pet_id:PET_ID}});
        result = result[0].toJSON();

        expect(result.latitude).toBe(DUMMY_LAT);
       
    })

    test('Remoção',async ()=>{
        await Pet.destroy({where:{localizacao_pet_id:PET_ID}});
    })

});*/