'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airplanes',[
  {
    model_number: 'Boeing 737',
    capacity: 189,
    manufacturer: 'Boeing',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    model_number: 'Boeing 747',
    capacity: 467,
    manufacturer: 'Boeing',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    model_number: 'Boeing 777',
    capacity: 396,
    manufacturer: 'Boeing',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    model_number: 'Boeing 787',
    capacity: 296,
    manufacturer: 'Boeing',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    model_number: 'Airbus A320',
    capacity: 180,
    manufacturer: 'Airbus',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    model_number: 'Airbus A321',
    capacity: 244,
    manufacturer: 'Airbus',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    model_number: 'Airbus A350',
    capacity: 350,
    manufacturer: 'Airbus',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    model_number: 'Airbus A380',
    capacity: 555,
    manufacturer: 'Airbus',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
