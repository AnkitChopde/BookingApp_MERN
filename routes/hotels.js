const express = require("express");
const hotelModel = require("../models/hotels.model");
const hotelRouter = express.Router();

//create

hotelRouter.post("/",async(req,res)=>{
    const newHotel =new hotelModel(req.body)
    try{
     const savedHotel = await newHotel.save()
     res.status(200).send(savedHotel)
    }
    catch(err){
        res.status(500).json(err)
    }
});

//update
hotelRouter.put("/:id",async(req,res)=>{
    
    try{
     const updatedHotel = await hotelModel.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
     res.status(200).send(updatedHotel)
    }
    catch(err){
        res.status(500).json(err)
    }
});

//delete
hotelRouter.delete("/:id",async(req,res)=>{
    
    try{
     hotelModel.findByIdAndDelete(req.params.id)
     res.status(200).send({msg: "Hotel data has been deleted!"})
    }
    catch(err){
        res.status(500).json(err)
    }
});

// get 
hotelRouter.get("/:id",async(req,res)=>{
    
    try{
     const hotelsData = await hotelModel.find(req.params.id)
     res.status(200).send(hotelsData)
    }
    catch(err){
        res.status(500).json(err)
    }
});

// get all

hotelRouter.get("/",async(req,res)=>{
    
    try{
        const hotelsData = await hotelModel.find()
        res.status(200).send(hotelsData)
    }
    catch(err){
        res.status(500).json(err)
    }
});



module.exports= {hotelRouter}