'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Flight.hasMany(models.Seat, { foreignKey: 'flight_id' });

       Flight.afterCreate(async (flight, options) => {
  const seatPromises = [];

  for (let i = 1; i <= flight.total_seats; i++) {
    seatPromises.push({
      flight_id: flight.id,
      seat_number: `${i}`, 
    });
  }

  await models.Seat.bulkCreate(seatPromises);
});

    }
  }
  Flight.init({
    flight_number: {
     type: DataTypes.STRING,
     allowNull:false,
     unique:true
    },
    airplane_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    src_airport_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    dest_airport_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    arrival_time: {
     type: DataTypes.DATE,
     allowNull:false
    },
    departure_time:  {
     type: DataTypes.DATE,
     allowNull:false
    },
    price:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boarding_gate: DataTypes.INTEGER,
    total_seats:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  
  return Flight;
};