const express = require("express");
const authRouter = express.Router();

authRouter.get("/",(req,res)=>{
    res.send("Hello, this is auth endpoint!")
});

authRouter.get("/register",(req,res)=>{
    res.send("Hello, this is register auth endpoint!")
})

module.exports= {authRouter}