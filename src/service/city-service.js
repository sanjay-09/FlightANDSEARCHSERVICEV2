const {CityRepository}=require("../repository/index");
class cityService {
    constructor(){
        this.cityRepository=new CityRepository();
    }
     
    async createCity(data){

        try{
            const city=await this.cityRepository.createCity(data);
            return city;

        }
        catch(err){
            console.log("something went wrong at the service layer");
            throw {err};
        }

    }
    async deleteCity(cityId){
        try{
            await this.cityRepository.deleteCityById(cityId);
            

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
            const city=await this.cityRepository.getCityById(cityId);
            return city;

        }
        catch(err){
            console.log("something went wrong at the service layer");
            throw {err};
        }
         
    }



}
module.exports=cityService;