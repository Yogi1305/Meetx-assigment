import mongoose  from "mongoose";


const activity= new mongoose.Schema({
    Title:{
        type:String,
    },
    Description:{
        type:String,

    },
    Location:{
        type:String,
    },
    

},{timestamps:true})

export const Activity= mongoose.model("Activity",activity);