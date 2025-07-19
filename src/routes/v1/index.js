const {CityController,AirportController}=require("../../controllers/");
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


module.exports=router;