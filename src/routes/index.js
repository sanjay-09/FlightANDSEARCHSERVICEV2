const v1Router=require("./v1/index");
const express=require("express");
const router=express.Router();

router.use("/v1",v1Router);

module.exports=router;