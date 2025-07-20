function compareTime(arrival_time,departure_time){
    let a=new Date(arrival_time);
    let b=new Date(departure_time);
   

    if(b.getFullYear()>a.getFullYear()){
        return false;
    }
else if(b.getMonth()>a.getMonth()){
    return false;
}
else if(b.getTime()>a.getTime()){

    return false;
}
    return true;
}
module.exports={
    compareTime
}