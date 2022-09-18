const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/database');


const Trip = sequelize.define('Trip', {
  // Model attributes are defined here
  viagem_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  pet: {
    type: DataTypes.UUID,
    allowNull: false
  },
  caixa:{
    type: DataTypes.UUID,
    allowNull: false
  },
 
}, {
    
    tableName: 'tb_viagem',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
      
});


module.exports = Trip