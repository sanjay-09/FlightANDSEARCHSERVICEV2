
const { where } = require("sequelize");
const {City}=require("../models/index");

class CityRepository{
    async createCity({name}){
       try{
        console.log("repo");
         const city=await City.create({
            name
        });
        return city;
       }
       catch(err){
        throw {err};
       }

    }

    async getCityById(cityId){
        try{
            const city=await City.findByPK(cityId);
            return city;

        }
        catch(err){
            return {err};

        }
    }

    async deleteCityById(cityId){
        try{
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
            const city=await City.update(data,{
            where:{
                id:cityId
            }
        });
        return city;
        }
        catch(err){
            throw err;
        }

    }



}
module.exports=CityRepository;