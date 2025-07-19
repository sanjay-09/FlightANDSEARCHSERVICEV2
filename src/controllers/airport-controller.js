const {AirportService}=require("../service/index");
const airportService=new AirportService();
const logger=require("../logger");
//=>/airport ==>POST
const create=async function(req,res){
    try{
        console.log("reached");
        const airport=await airportService.createAirport(req.body);
        return res.status(201).json({
            data:airport,
            status:true,
            message:"Successfully created the airport",
            err:{}

        })

    }
    catch(err){
        logger.error("error in airport create",err);
        return res.status(500).json({
            data:{},
            status:false,
            message:"not able to create the city",
            err:err
        })

    }
}

//->/airport/1 ==>Post

const get=async function(req,res){
    try{
        const airport=await airportService.getAirportById(req.params.id);
        return res.status(200).json({
            data:airport,
            status:true,
            message:"Successfully fetched the aiport",
            err:{}

        })
    }
    catch(err){
        logger.error("failed to fetch the airport",err);
        return res.status(500).json({
            data:{},
            status:false,
            message:"Not able to fetch the airport",
            err:err
        })

    }

}

//delete /airport/1

const destroy=async function(req,res){
    try{
        const airport=await airportService.deleteAirportById(req.params.id);
        return res.status(200).json({
            data:airport,
            status:true,
            message:"successfully deleted the airport",
            err:{}

        })
        

    }
    catch(err){
        logger.error("error while creating the airport",err);
        return res.status(500).json({
            data:{},
            status:false,
            message:"not able to delete the airport",
            err:err

        })


    }
}


//patch /airport/1

const update=async function(req,res){
    try{
        const airport=await airportService.updateAirportById(req.params.id,req.body);
        return res.status(201).json({
            data:airport,
            status:true,
            message:"successfully updated the airport",
            err:{}

        })

    }
    catch(err){
        logger.error("not able to update the airport",err);
        return res.status(500).json({
            data:{},
            status:false,
            message:"not able to update the airport",
            err:err
            

        })

    }
}

const getAll=async function(req,res){
    try{
        const airports=await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data:airports,
            status:true,
            message:"successfully fetched the airports",
            err:{}

        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"not able to fetch the cities",
            err:err
        })
    }
}

module.exports={
    create,
    get,
    destroy,
    update,
    getAll
}