const {SeatService}=require("../service/index");
const seatService=new SeatService();

const lock=async function(req,res){
    try{

        console.log("pi")
        const finalData={
            flight_id:req.body.flight_id,
            totalSeats:req.body.totalSeats

        };

        const data=await seatService.lockRows(finalData);
        return res.status(200).json({
            data:data,
            status:true,
            message:"Locked row",
            err:{}
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
               data:{},
            status:false,
            message:"false",
            err:err.message

        })
    }
}

const confirmSeats=async function(req,res){
    try{
        const finalData={
            seatIds:req.body.seatIds
        }
        const data=await seatService.confirmSeats(finalData);
        return res.status(200).json(
           {
             data:data,
            status:false,
            message:"Booking done",
            err:{}
           }
        )

    }
    catch(err){
        return res.status(500).json({
               data:{},
            status:false,
            message:"false",
            err:err

        })
    }
}

const release=async function(req,res){
    try{

           const finalData={
            seatIds:req.body.seatIds
        }
        const data=await seatService.releaseSeats(finalData);
        return res.status(200).json(
           {
             data:data,
            status:true,
            message:"Booking changed",
            err:{}
           }
        )

    }
    catch(err){
        return res.status(500).json({
               data:{},
            status:false,
            message:"false",
            err:err

        })
    }
}
module.exports={
    lock,
    confirmSeats,
    release
}