import bcrypt from "bcrypt";
import Member from "../../model/Member";
import jwt from "jsonwebtoken"
import CheckField from "../../utils/CheckField";
import asynchandler from "express-async-handler"

const Login =asynchandler(async(req,res)=>{
    
    const {Username,Password}=req.body;

    

})

export default Login