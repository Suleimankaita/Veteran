import bcrypt from 'bcrypt'
import asynchandler from "express-async-handler"
import User from "../../model/Member.js" 
import RHVProfiles from '../../model/RHVProfiles.js'
import CheckField from '../../utils/CheckField.js'
import UserAddress from '../../model/UserAddress.js'
import RHVUserInformation from '../../model/RHVUserInformation.js'

const Registration =asynchandler (async(req,res)=>{
    const {Username,Password,FirstName,LastName,Phone,Address,UserInformation,PhoneNumber,Email,Role}=req.body
    const CheckFields=CheckField({Username,Password,FirstName,LastName,Phone,Address,UserInformation,PhoneNumber,Email});
    const UserName=Username.charAt(0).toUpperCase()+Username.substring(1,Username.length).toLowerCase()
    
    const UserFound=await User.findOne({Username}).exec()
    
    if(UserFound)return res.status(409).json({message:"UserName Is Already Exist ",status:409,success:false})
    
        if(!CheckFields.success)return res.status(400).json({message:CheckFields.message,status:400,success:false});

    const hashpassword=await bcrypt.hash(Password,10);

    const Addressid=await UserAddress.create(Address)

    const UserInformationId=await RHVUserInformation.create(UserInformation)

    const Profile=await RHVProfiles.create({
        Firtname:FirstName,
        Lastname:LastName,
        Password,
        // profileImg,
        Address:Addressid?._id,
        UserInformation:UserInformationId?._id,
        PhoneNumber,
        Email
    })

    await User.create({
        UserName,
        Role,
        UseProfileRHV:Profile?._id
    })

    res.status(201).json({message:`User ${Username} is Created`,status:201,success:true})

})

export default Registration;