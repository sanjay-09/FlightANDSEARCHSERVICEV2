'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    model_number:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true

    },
    capacity: DataTypes.INTEGER,
    manufacturer:{
          type: DataTypes.STRING,
      allowNull:false,

  }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};