import mongoose from "mongoose";


const connectDB = async () => {
    // console.log(process.env.MONGO_URL);
    
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

export default connectDB;