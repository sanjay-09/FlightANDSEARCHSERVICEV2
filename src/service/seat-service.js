const {SeatRepository,FlightRepository}=require("../repository/index")
class SeatService{

    constructor(){
        this.seatRepository=new SeatRepository();
        this.flightRepository=new FlightRepository();

    }

    async lockRows(data){
        try{

            const flight=await this.flightRepository.getFlightById(data.flight_id);
            if(!flight){
                throw new Error("Flight not present");
            }


            const data1=await this.seatRepository.lockRows(data);

            const finalData={seatAllocated:data1,price:flight.price}
            return finalData;

        }
        catch(err){
            console.log(err);
            throw err;
        }
    }

    async confirmSeats(data){
        try{
            const data1=await this.seatRepository.confirmSeats(data);
            return data1;

        }
        catch(err){
            throw err;

        }
    }

    async releaseSeats(data){
        try{
            const data1=await this.seatRepository.releaseSeats(data);
            return data1;

        }
        catch(err){
            throw err;
        }
    }

}
module.exports=SeatService;