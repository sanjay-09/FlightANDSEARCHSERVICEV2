const express=require("express");

const {PORT}=require("./config/serverConfig.js")

const setUpAndStartServer=function(){

    const app=express();

    app.listen(PORT,function(){
        console.log(`listening on the PORT ${PORT}`);
    })



}
setUpAndStartServer();