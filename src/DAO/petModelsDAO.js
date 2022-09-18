const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/database');


const Pet = sequelize.define('Pet', {
  // Model attributes are defined here
  pet_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  pet_nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pet_idade:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pet_raca:{
    type: DataTypes.STRING(64),
    allowNull: false
  },
  pet_tipo:{
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
    
    tableName: 'tb_pet',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
      
});


module.exports = Pet