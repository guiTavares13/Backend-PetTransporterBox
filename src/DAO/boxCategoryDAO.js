const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/database');


const BoxCategory = sequelize.define('CategoryBox', {
  // Model attributes are defined here
  tipo_caixa_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  caixa_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caixa_altura:{
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  caixa_largura:{
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
    
    tableName: 'tb_tipo_caixa',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
      
});


module.exports = BoxCategory