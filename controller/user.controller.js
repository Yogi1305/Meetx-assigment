import bcrpyt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../model/User.js";
import { userValidationSchema } from "../Validation.js";

export const register = async (req, res) => {
  try {
     const { error } = userValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { Name, Email, Password, Phone } = req.body;
    if (!Name || !Email || !Password || !Phone) {
      return res.status(400).json({ message: "All field are required" });
    }
    const userEmail = await User.findOne({ Email });
    if (userEmail) {
      return res.status(400).json({ message: "Email  already exist" });
    }

    const hashpassword = await bcrpyt.hash(Password, 10);
    await User.create({
      Name,
      Email,
      Password: hashpassword,
      Phone,
    });
    return res.status(201).json({
      message: "account create successfully",
      success: true,
    });
  } catch (error) {
    console.log("error in register", error);
  }
};
export const login = async (req, res) => {
  try {
     
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(404).json({
        message: "mising field",
      });
    }
    const user = await User.findOne({ Email });
    if (!user)
      return res.status(200).json({
        message: "user doesnot exist",
        success: false,
      });
    const isPassword = await bcrpyt.compare(Password, user.Password);
    if (!isPassword) {
      return res.status(200).json({
        message: "password doesnot match",
        success: false,
      });
    }

    // Generate JWT token
    const tokenData = { userId: user._id };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
     return res
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "none",
        secure: true
      })
      .status(200)
      .json({
        _id: user._id,
        Name: user.Name,
        Email: user.Email,
        
        success: true,
        message: `Welcome back ${user?.Name.toUpperCase()}`,
      });
  } catch (error) {
    console.log("error in login ",error)
  }
};

export const logout = (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logged out successfully.",
    });
  } catch (error) {
    console.log(error);
  }
};


export const getuseractivity=async(req,res)=>{
    try {
        const {Userid}=req.body
        const data = await User.findById(Userid).populate("Activity");

        return res.status(200).json(data.Activity)
    } catch (error) {
        console.log("error in getuseractivity",error)
    }
}
