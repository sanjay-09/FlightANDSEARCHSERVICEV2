const cityRepository=require("../../controllers/city-controller");
const express=require("express");
const router=express.Router();

router.post("/city",cityRepository.create);
router.get("/city/:id",cityRepository.get);
router.delete("/city/:id",cityRepository.destroy);
router.patch("/city/:id",cityRepository.update);

module.exports=router;