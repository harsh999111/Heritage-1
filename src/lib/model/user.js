import mongoose from "mongoose";
 const userModel= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confirmpassword:String
 });

 
 export const User = mongoose.models.users || mongoose.model("users",userModel)

