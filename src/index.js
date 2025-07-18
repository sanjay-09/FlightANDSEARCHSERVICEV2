const express=require("express");
const bodyParser=require("body-parser");

const {PORT}=require("./config/serverConfig.js")

const setUpAndStartServer=async function(){

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));



    app.listen(PORT,function(){
        console.log(`listening on the PORT ${PORT}`);
    })



}
setUpAndStartServer();