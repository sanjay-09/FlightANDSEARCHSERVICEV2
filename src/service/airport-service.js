const {AirportRepository}=require("../repository/index");
const logger=require("../logger");

class AirportService{
    constructor(){
        this.airportRepository=new AirportRepository();
    }
    async createAirport(data){
       try{
        if(Array.isArray(data.airport_information)){
           
            const airports=await this.airportRepository.createMultiAirports(data.airport_information);
            return airports;

        }
        else{
             const finalData={
            name:data.name,
            city_id:data.city_id,
            address:data.address
        }
        const airport=await this.airportRepository.createAirport(finalData);
        return airport;
        }
        
       }
       catch(err){
       throw {err};

       }

    }
    async getAirportById(airportId){
        try{
            const airport=await this.airportRepository.getAirport(airportId);
            return airport;

        }
        catch(err){
            throw {err};

        }
    }
    async deleteAirportById(airportId){
        try{
            const data=await this.airportRepository.deleteAirport(airportId);
            return data;

        }
        catch(err){
            throw {err};
        }
    }
    async updateAirportById(airportId,data){
        try{
             const finalData={
            name:data.name,
            city_id:data.city_id,
            address:data.address
        }
        const airport=await this.airportRepository.updateAirport(airportId,finalData);
        return airport;

        }
        catch(err){
            throw {err};

        }
        
    }
    async getAllAirports(data){
        try{

            const airports=await this.airportRepository.getAllAirports(data);
            return airports;

        }
        catch(err){
            throw {err};
        }
    }

}
module.exports=AirportService;