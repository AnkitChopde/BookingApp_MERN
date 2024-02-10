const express = require("express");
const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose");
const { router, authRouter } = require("./routes/auth");
const { userRouter } = require("./routes/users");
const { roomRouter } = require("./routes/rooms");
const { hotelRouter } = require("./routes/hotels");


const app = express();
dotenv.config();

app.use(express.json())
const connect = async () =>{
    try{
    await mongoose.connect(process.env.mongoURL)
  console.log("connected to database!")    
}
    catch(err){
        throw err;
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected!")
});

app.use("/api/auth",authRouter)
app.use("/api/users",userRouter)
app.use("/api/rooms",roomRouter)
app.use("/api/hotels",hotelRouter)

app.listen(8000,()=>{
    connect();
    console.log("Connected to server!")
})