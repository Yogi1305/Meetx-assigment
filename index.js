import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/database.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import Userroute from "./route/Userroute.js"
import Activityroute from "./route/Activityroute.js"
dotenv.config();
const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 app.use(cookieParser());
app.use("/user",Userroute)
app.use("/activity",Activityroute);

app.listen(8000,()=>{
    connectDB();
    console.log("i am listening")
})