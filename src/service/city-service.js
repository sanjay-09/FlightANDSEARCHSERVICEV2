const {CityRepository}=require("../repository/index.js");
const logger=require("../logger.js")
class CityService {
    constructor(){
        this.cityRepository=new CityRepository();
    }
     
    async createCity(data){
        try{
            logger.info("city creation reached at the service layer");
            if(Array.isArray(data.name)){
                const names=data.name.map(function(x){
                    return {name:x}
                });
                console.log(names);
                const city=await this.cityRepository.createMultipleCities(names);
                return city;


            }
            else{
        const city=await this.cityRepository.createCity(data);
           
            return city;

            }
          
          

        }
        catch(err){
            console.log(err);
            
            console.log("something went wrong at the service layer");
            throw {err};
        }

    }
    async deleteCity(cityId){
        try{

            logger.info("deletion process inside service layer");
            await this.cityRepository.deleteCityById(cityId);
            return true;
            

        }
        catch(err){
            console.log("something went wrong at the service layer");
            throw {err};
        }

    }
    async updateCity(cityId,data){
        try{
            const city=await this.cityRepository.updateCityById(cityId,data);
            return city;

        }
        catch(err){
            console.log("something went wrong at the service layer");
            throw {err};
        }

    }
    async getCity(cityId){
        try{
            logger.info("inside the city service layer");
            const city=await this.cityRepository.getCityById(cityId);
            return city;

        }
        catch(err){
            console.log("something went wrong at the service layer");
            throw {err};
        }
         
    }
    async getAllCities(data){
        try{
            logger.info("inside the service layer");
            const cities=await this.cityRepository.getAllCities({name:data.name});
            return cities;

        }
        catch(err){
            throw {err};
        }
    
    }



}
module.exports=CityService;