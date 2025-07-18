
const {CityService}=require("../service/index");
const cityService=new CityService();

const create=async function(req,res){
  try{
    const city= await cityService.createCity(data);
    return res.status(201).json({
        data:city,
        success:true,
        message:'Succesfully created a city',
        err:{}

    });

  }
  catch(err){
    return res.status(500).json({
        data:{},
        sucess:false,
        message:"Not able to create a city",
        err:error
    })

  }

}
//delete=>/city/:id
const destroy=async function(req,res){
    try{
        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"deleted the city",
            err:{}

        })
      
    }
    catch(err){
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
        const city=await cityService.getCity(req.params.id);
        return res.status(200).json({
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
            err:{}
        })
    }

}

//patch:/city/:id   req.body
const update=async function(req,res){
    try{
        const city=await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:city,
            status:true,
            message:"city is updated succesfully",
            err:{}

        })


    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"city is not updated",
            err:err
        })

    }

}


module.exports={
    create,
    destroy,
    get,
    update
}