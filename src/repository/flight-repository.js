const { Op } = require("sequelize");
const {Flight}=require("../models/index");

class FlightRepository{

    #createFilter(data){
        let filter={};
        if(data.src_airport_id){
            filter.src_airport_id=data.src_airport_id;
        }
        if(data.dest_airport_id){
            filter.dest_airport_id=data.dest_airport_id
        }

        

        let priceArr=[];
        if(data.min_price){
            priceArr.push({price:{[Op.gte]:data.min_price}});
        }
        if(data.max_price){
            priceArr.push({price:{[Op.lte]:data.max_price}});
        }

        Object.assign(filter,{[Op.and]:priceArr});
      
        return filter;


    }

    async createFlight(data){
        try{
            const flight=await Flight.create(data);
            return flight;

        }
        catch(err){
            throw {err};

        }

    }
    async getFlightById(flightId){
        try{
            const flight=await Flight.findByPk(flightId);
            return flight;

        }
        catch(err){
            throw {err};
        }
    }
    async deleteFlightById(flightId){
        try{
            const flight=await Flight.destroy({
                where:{
                    id:flightId

                }
            });
            return flight;

        }
        catch(err){
            throw {err};
        }
    }
    async getAllFlights(filter){
       try{
        const filterObj=this.#createFilter(filter);
        const flights=await Flight.findAll({
            where:filterObj
        });
        return flights;


       }
       catch(err){
        console.log(err);
        throw {err};

       }
        
    }

}
module.exports=FlightRepository;