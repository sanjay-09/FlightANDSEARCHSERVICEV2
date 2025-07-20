const {clientErrorCodes}=require("../utils/error-codes")
const validateData=function(req,res,next){
      console.log("middleware");
    if(!req.body.flight_number||!req.body.airplane_id||!req.body.src_airport_id||!req.body.arrival_time||!req.body.departure_time||!req.body.price){
        return res.status(clientErrorCodes.BAD_REQ).json({
            data:{},
            status:false,
            message:"Not a valid request"
        })



    }
    next();

}

module.exports={
    validateData
}