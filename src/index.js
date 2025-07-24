const express=require("express");
const bodyParser=require("body-parser");
const {create}=require("./controllers/city-controller.js");
const apiRoutes=require("./routes/index.js");

const {PORT}=require("./config/serverConfig.js");
const db=require("./models/index.js");



const setUpAndStartServer=async function(){

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


  app.use("/api",apiRoutes);







    app.listen(PORT,async function(){
       try{
         
  
          
        console.log(`listening on the PORT ${PORT}`);

        
       }
       catch(Err){
        console.log(Err);
       }
    })



}
setUpAndStartServer();