const {CityController,AirportController,FlightController,AirplaneController}=require("../../controllers/");
const {FlightMiddleware}=require("../../Middleware/index")
const express=require("express");
const router=express.Router();


//-------City API--------//
router.post("/city",CityController.create);
router.get("/city/:id",CityController.get);
router.delete("/city/:id",CityController.destroy);
router.patch("/city/:id",CityController.update);
router.get("/city",CityController.getAll);

//------Airport API-----//
router.post("/airport",AirportController.create);
router.get("/airport/:id",AirportController.get);
router.delete("/airport/:id",AirportController.destroy);
router.patch("/airport/:id",AirportController.update);
router.get("/airports",AirportController.getAll)


//--Flights---//
router.post("/flights",FlightMiddleware.validateData,FlightController.create);
router.get("/flight/:id",FlightController.get);
router.get("/flight",FlightController.getAll);


//--airplanes--//
router.get("/airplane/:id",AirplaneController.get);
router.post("/airplane",AirplaneController.create)

module.exports=router;