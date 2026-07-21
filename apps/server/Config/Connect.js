import mongoose from "mongoose";
import asynchandler from "express-async-handler"

export const connect=asynchandler(async(req,res)=>{
    await mongoose.connect(process.env.URI)
})

 