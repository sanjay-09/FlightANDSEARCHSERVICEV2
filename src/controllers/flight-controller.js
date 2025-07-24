const {FlightService}=require("../service/index");
const {successCodes}=require("../utils/error-codes")
const flightService=new FlightService();

const create=async function(req,res){
    try{
        console.log("controller");
        const flight=await flightService.createFlight(req.body);
          return res.status(successCodes.Created).json({
            data:flight,
            status:true,
            message:'Successfully created the flight',
            err:{}

          })


    }
    catch(err){
         return res.status(500).json({
            data:{},
            status:false,
            message:'Not able to create the flight',
            err:err

         })
    }
}
const get=async function(req,res){
    try{
        const flight=await flightService.getFlightById(req.params.id);
        return res.status(successCodes.OK).json({
            data:flight,
            status:true,
            message:"Successfully fetched the flight",
            err:{}

        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Not able to fetch the flights",
            err:{}
        })

    }
}
const getAll=async function(req,res){
    try{
        const flights=await flightService.getAllFlights(req.query);
        return res.status(successCodes.OK).json({
            data:flights,
            status:true,
            message:"able to fetch the flights",
            err:{}
            

        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"not able to fetch the flights",
            err:err
        })

    }

}

const update=async function(req,res){
    try{
        const flightId=req.params.id;
        const finaldata={seat:req.body.seat};
        const data=await flightService.updateSeatData(flightId,finaldata);
        return res.status(200).json({
            data:data,
            status:true,
            message:"Updated the seat data",
            err:{}

        })

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data:{},
            status:false,
            message:"not able to fetch the flights",
            err:err
        })

    }

}
module.exports={
    create,
    get,
    getAll,
    update
}