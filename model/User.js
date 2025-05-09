import mongoose  from "mongoose";


const usermodel= new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,

    },
    Password:{
        type:String,
    },
    Phone:{
        type:Number
    },
    Activity: [{ type: mongoose.Schema.Types.ObjectId, ref: "Activity" }]
      

},{timestamps:true})

export const User= mongoose.model("User",usermodel);