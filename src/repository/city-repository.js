const {City}=require("../models/index");
const logger = require('../logger');
const { Op } = require("sequelize");

class CityRepository{
    async createCity({name}){
       try{
         logger.info("city creation reached at the repository layer");
       
         const city=await City.create({
            name
        });
       
        return city;
       }
       catch(err){
      logger.error("city creation failed at the repo layer",err);
        throw {err};
       }

    }

    async getCityById(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;

        }
        catch(err){
           console.log("something went wrong at the repo layer");
            throw {err};

        }
    }

    async deleteCityById(cityId){
        try{
            logger.info("deletion process inside the repo layer");
            await City.destroy({
                where:{
                    id:cityId

                }
            });
            return true;

        }
        catch(err){
            throw {err};

        }
    }

    async updateCityById(cityId,data){
        try{
           const city=await City.findByPk(cityId);
           city.name=data.name;
           await city.save();
        return city;
        
        }
        catch(err){
            throw err;
        }

    }

    async  getAllCities(filter) {
        try{
            logger.info("inside the city repository layer");
        
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                })
                return cities;

            }
            const cities=await City.findAll();
            return cities;

        }
        catch(err){
            throw {err};
            

        }

        
    }



}
module.exports=CityRepository;