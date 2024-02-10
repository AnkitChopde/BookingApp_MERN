const express = require("express");
const userRouter = express.Router();

userRouter.get("/",(req,res)=>{
    res.send("Hello, this is user endpoint!")
});

module.exports= {userRouter}