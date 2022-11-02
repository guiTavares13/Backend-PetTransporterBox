const { Sequelize, DataTypes } = require('sequelize');

const sequelize = process.env.NODE_ENV === 'test' ? (require('../../tests/connection/testdatabase')) : (require('../connection/database'));


const Box = sequelize.define('Box', {
  // Model attributes are defined here
  caixa_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  caixa_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo_caixa:{
    type: DataTypes.UUID,
    allowNull: false,
  },

}, {
    
    tableName: 'tb_caixa',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
      
});


module.exports = Box