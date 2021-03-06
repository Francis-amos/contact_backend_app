import express from "express";


 import dotenv from 'dotenv';


 dotenv.config();


 import mongoose from "mongoose";



const app = express();


const PORT =process.env.PORT?? 5000;



app.get("/", (request, response)=>{
    response.send("Hello World");
});





mongoose.connect(process.env.MONGO_DB_CONSTRING, (error) =>{

  if(error) {
    return console.log("Couldn't connect to MongoDB");
  }

  else{
    return console.log("Connection to MongoDB was successful");
  }

});



app.listen(PORT, () => console.log(`Sever is running well: ${PORT}`));




