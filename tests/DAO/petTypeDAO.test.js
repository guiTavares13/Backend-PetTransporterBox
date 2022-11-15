const Pet = require("../../src/DAO/petTypeDAO");

const DUMMY_NAME = "DUMMY_TYPE";
const DUMMY_DESCRIPTION = "DUMMY_DESCRIPTION";



var PET_ID = ""

describe('Testes com Box PetModel DAO',()=>{

    test('Cadastro ',async ()=>{
        auxPet = Pet.build({
            tipo_nome: DUMMY_NAME,
            tipo_descricao:DUMMY_DESCRIPTION

        });

        data = await auxPet.save();
        
        PET_ID = data["tipo_pet_id"];

    })

    test('Leitura',async ()=>{
        result = await Pet.findAll({where:{tipo_pet_id:PET_ID}});
        result = result[0].toJSON();

        expect(result.tipo_nome).toBe(DUMMY_NAME);
       
    })

    test('Remoção',async ()=>{
        await Pet.destroy({where:{tipo_pet_id:PET_ID}});
    })

});