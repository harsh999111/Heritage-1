import mongoose from "mongoose";

const userModel= new mongoose.Schema({
    email:String,
    password:String
 });

 export const User = mongoose.models.users || mongoose.model("users",userModel)