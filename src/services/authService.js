const User=require("../models/userModel");
const generateToken=require('../utils/generateToken');
const bcrypt=require("bcryptjs");

// Register User
const registerUser=async({name,email,password,role})=>{
    const userExists=await User.findOne({email})
    if(userExists){
        const error=new Error("User alredy exists");
        error.statusCode=400;
        throw error
    }
    const user =await User.create({
        name,email,password,role
    })
    return{
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        token:generateToken(user._id,user.role)
    }
}
// Login User
const loginUser=async({email,password})=>{
    const user=await User.findOne({email});
    if(!user){
        const error=new Error("Invalid email or password");
        error.statusCode=401;
        throw error;
    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch){
        const error=new Error("Invalid email or password");
        error.statusCode=401;
        throw error;
    }
    return{
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        token:generateToken(user._id,user.role)
    }
}
module.exports={registerUser,loginUser}
