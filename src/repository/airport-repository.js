const {Airport}=require("../models/index");
const logger=require("../logger");
const { Op } = require("sequelize");

class AirportRepository{

    async createAirport(data){
        try{
            console.log(data);
            const airport=await Airport.create(data);
            return airport;

        }
        catch(err){
            logger.error("failed at the repository layer",err);
            throw {err};

        }

        
        
    }

    async getAirport(airportId){
        try{
            const airport=await Airport.findByPk(airportId);
            return airport;

        }
        catch(err){
            logger.error("failed at the repository layer",err);
            throw {err};

        }
    }
    async deleteAirport(airportId){
        try{
            const data=await Airport.destroy({
                where:{
                    id:airportId
                }
            })
            return data;

        }
        catch(err){
            logger.error("failed at the repository layer")
            throw {err};

        }
    }

    async updateAirport(airportId,data){
        try{
            const airport=await Airport.findOne({
                where:{
                    id:airportId
                }
            });
            if(!airport){
                return "Airport is not present";
            }
            if(data.name){
                airport.name=data.name;
            }
            if(data.address){
                airport.address=data.address;
            }
            if(data.cityId){
                airport.cityId=data.cityId;
            }
            await airport.save();
            return airport;

        }
        catch(err){
            console.log("err",err);
            logger.error("error at the repository layer");
            throw {err};


        }
    }

    async getAllAirports(data){
        try{
            if(data.name){
                const airports=await Airport.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:data.name
                        }
                    }
                });
                return airports;

            }
            else{
                 const airports=await Airport.findAll();
            return airports;
            }


           

        }
        catch(err){
            throw {err};
        }
    }
    async createMultiAirports(data){
        try{
            const airports=await Airport.bulkCreate(data,{validate:true});
            return airports;

        }
        catch(err){
            throw {err};
        }
    }

}
module.exports=AirportRepository;
