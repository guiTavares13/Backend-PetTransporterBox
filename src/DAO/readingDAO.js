const { Sequelize, DataTypes } = require('sequelize');

const sequelize = process.env.NODE_ENV === 'test' ? (require('../../tests/connection/testdatabase')) : (require('../connection/database'));


const Read = sequelize.define('Read', {
  // Model attributes are defined here
  leitura_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  leitura_data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  leitura_porta_aberta:{
    type: DataTypes.BOOLEAN,
  },
 viagem:{
    type: DataTypes.UUID,
    allowNull: false
  },
  estado_pet:{
    type: DataTypes.UUID,
    allowNull: false
  },
  localizacao:{
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    
    tableName: 'tb_leitura',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
      
});


module.exports = Read