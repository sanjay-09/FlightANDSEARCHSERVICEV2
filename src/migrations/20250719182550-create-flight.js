'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flight_number: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      airplane_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      src_airport_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      dest_airport_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      arrival_time: {
        type: Sequelize.DATE,
        allowNull:false
      },
      departure_time: {
        type: Sequelize.DATE,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      boarding_gate: {
        type: Sequelize.INTEGER
      },
      total_seats: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};