'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  
    }
  }
  Seat.init({
    flight_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    seat_number: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
   status: {
        type: DataTypes.STRING,
        allowNull:false,
        enum:['AVAILABLE','LOCKED','BOOKED'],
        defaultValue:'AVAILABLE'
      }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  
  return Seat;
};