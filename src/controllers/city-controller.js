
const {CityService}=require("../service/index");
const cityService=new CityService();
const {successCodes}=require("../utils/error-codes")
const logger = require('../logger');

const create=async function(req,res){
  try{
    logger.info("City creation started");
    const city= await cityService.createCity(req.body);
     logger.info("City creation started");
    return res.status(successCodes.Created).json({
        data:city,
        success:true,
        message:'Succesfully created a city',
        err:{}

    });
    
  

  }
  catch(err){
    logger.error(`Not able to create the city with id:${req.name}`,err);

    return res.status(500).json({
        data:{},
        sucess:false,
        message:"Not able to create a city",
        err:err
    })

  }

}
//delete=>/city/:id
const destroy=async function(req,res){
    try{
        logger.info("city deletion start");
        const response=await cityService.deleteCity(req.params.id);
        return res.status(successCodes.OK).json({
            data:response,
            success:true,
            message:"deleted the city",
            err:{}

        })
      
    }
    catch(err){
        logger.error("error in city creation",err);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the city",
            err:err
        })

    }

}
//get =>/city/:id
const get=async function(req,res){
    try{
        logger.info("controller layer");
        
      
        const city=await cityService.getCity(req.params.id);
        return res.status(successCodes.OK).json({
            data:city,
            status:true,
            message:"successfully fetched the city",
            err:{}


        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Not able to fetch the city",
            err:err
        })
    }

}

//patch:/city/:id   req.body
const update=async function(req,res){
    try{
        const city=await cityService.updateCity(req.params.id,req.body);
        return res.status(successCodes.OK).json({
            data:city,
            status:true,
            message:"city is updated succesfully",
            err:{}

        })


    }
    catch(err){
        return res.status(400).json({
            data:{},
            status:false,
            message:"city is not updated",
            err:err
        })

    }

}

const getAll=async function(req,res){
    try{
        logger.info("inside the controller layer");
        console.log("query",req.body);
        const cities=await cityService.getAllCities(req.query);
        return res.status(successCodes.OK).json({
            data:cities,
            status:true,
            message:"successfully fetched all the cities",
            err:{}
        });
        
    }
    catch(err){
        logger.error(err);
        return res.status(500).json({
            data:{},
            status:false,
            message:"Failed to fetch all the cities",
            err:{err}


        })
    }
}


module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}

