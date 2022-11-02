const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/database');


const User = sequelize.define('User', {
  // Model attributes are defined here
  usuario_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  usuario_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuario_documento:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuario_data_nascimento:{
    type: DataTypes.DATE
  },
  usuario_email: {
    type: DataTypes.STRING,
    allowNull:false
  },
  usuario_senha: {
    type: DataTypes.STRING,
    allowNull:false
  },
  usuario_telefone : {
    type: DataTypes.STRING,
  }

}, {
    
    tableName: 'tb_usuario',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    instanceMethods: {
      toJSON: function () {
        var values = Object.assign({}, this.get());
  
        delete values.usuario_senha;
        return values;
      }
    }
      
});


module.exports = User