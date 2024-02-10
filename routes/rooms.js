const express = require("express");
const roomRouter = express.Router();

roomRouter.get("/",(req,res)=>{
    res.send("Hello, this is room endpoint!")
});


module.exports= {roomRouter}