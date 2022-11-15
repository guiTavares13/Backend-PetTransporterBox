const Pet = require("../../src/DAO/petModelsDAO");

const DUMMY_NAME = "DUMMY_PET";
const DUMMY_AGE = 12;
const DUMMY_BEED = "DUMMY_BEED";
const DUMMY_TYPE = 1;


var PET_ID = ""

describe('Testes com Box PetModel DAO',()=>{

    test('Cadastro ',async ()=>{
        auxPet = Pet.build({
            pet_nome: DUMMY_NAME,
            pet_idade:DUMMY_AGE,
            pet_raca: DUMMY_BEED,
            pet_tipo: DUMMY_TYPE
        });

        data = await auxPet.save();
        
        PET_ID = data["pet_id"];

    })

    test('Leitura',async ()=>{
        result = await Pet.findAll({where:{pet_id:PET_ID}});
        result = result[0].toJSON();

        expect(result.pet_nome).toBe(DUMMY_NAME);
       
    })

    test('Remoção',async ()=>{
        await Pet.destroy({where:{pet_id:PET_ID}});
    })

});