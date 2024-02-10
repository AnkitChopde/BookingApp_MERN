const express = require("express");
const hotelRouter = express.Router();

//create

hotelRouter.post("/",async(req,res)=>{
    const newHotel =new Hotel(req.body)
    try{
     const savedHotel = await newHotel.save()
     res.status(200).send(savedHotel)
    }
    catch(err){
        res.status(500).json(err)
    }
});


module.exports= {hotelRouter}