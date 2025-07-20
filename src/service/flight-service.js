const {FlightRepository}=require("../repository/index");
const {Airplane}=require("../models/index");
const { compareTime } = require("../utils/helper");


class FlightService{
    constructor(){
        this.flightRepository=new FlightRepository();
        
    }
    async createFlight(data){
        try{
        //capacity fetch from the airplane
        console.log("service")
        const airplaneDetail=await Airplane.findByPk(data.airplane_id);
        const airplaneSerializeDetail=airplaneDetail.toJSON();
        const capacity=airplaneSerializeDetail.capacity;

        const compare=compareTime(data.arrival_time,data.departure_time);
        if(compare){
            throw {err:"Arrival time can not be less than departure time"}

        }

        const finalData={
            ...data,
            total_seats:capacity
        }
        const flight=await this.flightRepository.createFlight(finalData);
        return flight;



        }
        catch(err){
            console.log(err);
            throw {err}

        }
    }
    async getFlightById(flightId){
        try{
            const flight=await this.flightRepository.getFlightById(flightId);
            return flight;

        }
        catch(err){
            throw {err};

        }
    }
    async getAllFlights(filter){
        try{
            const flights=await this.flightRepository.getAllFlights(filter);
            return flights;

        }
        catch(err){
            throw {err};
        }
    }

}
module.exports=FlightService;