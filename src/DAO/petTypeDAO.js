const { Sequelize, DataTypes } = require('sequelize');

const sequelize = process.env.NODE_ENV === 'test' ? (require('../../tests/connection/testdatabase')) : (require('../connection/database'));


const PetType = sequelize.define('PetType', {
  // Model attributes are defined here
  tipo_pet_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  tipo_nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo_descricao:{
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    
    tableName: 'tb_tipo_pet',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
      
});


module.exports = PetType