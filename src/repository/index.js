const CityRepository = require("./city-repository");
const AirportRepository=require("./airport-repository")
const FlightRepository=require("./flight-repository");
const CrudRepository = require("./crud-repository");
const AirplaneRepository = require("./airplane-repository");

  module.exports={
    CityRepository:CityRepository,
    AirportRepository:AirportRepository,
    FlightRepository:FlightRepository,
    AirplaneRepository:AirplaneRepository,
    CrudRepository:CrudRepository
  }