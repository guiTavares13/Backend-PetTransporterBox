const { Sequelize, DataTypes } = require('sequelize');

const sequelize = process.env.NODE_ENV === 'test' ? (require('../../tests/connection/testdatabase')) : (require('../connection/database'));


const Location = sequelize.define('Location', {
  // Model attributes are defined here
  localizacao_pet_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  longitude:{
    type: DataTypes.FLOAT,
    allowNull: false
  }
 
}, {
    
    tableName: 'tb_viagem',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
      
});


module.exports = Location