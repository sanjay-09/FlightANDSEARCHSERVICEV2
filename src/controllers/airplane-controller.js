const {AirplaneService}=require("../service/index");
const airplaneService=new AirplaneService();


const get=async function(req,res){
    try{
        const result=await airplaneService.get(req.params.id);
        return res.status(200).json({
            data:result,
            status:true,
            messaage:"able to fetch the data",
            err:{}
        });
        

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Not able to fetch the data",
            err:err
        })
    }

}
const create=async function(req,res){
    try{
        const result=await airplaneService.create(req.body);
        return res.status(201).json({
            data:result,
            status:true,
            message:"able to create the airplane",
            err:{}
        });

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Not able to fetch the result",
            err:err
        });
    }
}
module.exports={
    get,
    create
}