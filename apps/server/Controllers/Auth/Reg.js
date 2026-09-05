import bcrypt from 'bcrypt'
import asynchandler from "express-async-handler"
import User from "../../model/Member.js" 
import RHVProfiles from '../../model/RHVProfiles.js'
import CheckField from '../../utils/CheckField.js'
import UserAddress from '../../model/UserAddress.js'
import RHVUserInformation from '../../model/RHVUserInformation.js'
import { ConvertName } from '../../utils/NameConverTer.js'

    const Registration =asynchandler (async(req,res)=>{

    const {Username,password,firstName,lastName ,phone,Address,UserInformation,PhoneNumber,email,Role,occupation,organization,skills,education,maritalStatus,interests,address,state,lga,ward,country}=req.body
    
    console.log(req.body);

    const CheckFields=CheckField({Username,password,firstName,lastName ,phone,Address,UserInformation,PhoneNumber,email,occupation,
    organization,skills,education,maritalStatus,interests, address,state,lga,ward,country});
    
    const UserName=ConvertName(Username);
    
    const UserFound=await User.findOne({Username}).exec()
    
    if(UserFound)return res.status(409).json({message:"UserName Is Already Exist ",status:409,success:false})
    
    if(!CheckFields.success)return res.status(400).json({message:CheckFields.message,status:400,success:false});

    const AddressFields={
        "HouseNumber":23,
        "StreetName":address,
        "State":state,
        "LocalGov":lga,
        "Ward":ward,
        "country":country,
        "constactPhone":phone
 }


 const UserInformationFields={
   "Occupation":occupation,
    "Organization":organization,
    "Skills":skills,
    "Qualification":education,
    "realtionship":maritalStatus,
    "AreasOfInterest":interests

 }
 

    const hashpassword=await bcrypt.hash(password,10);

    const Addressid=await UserAddress.create(Address)

    const UserInformationId=await RHVUserInformation.create(UserInformation)

    const Profile=await RHVProfiles.create({
        Firtname:firstName,
        Lastname:lastName ,
        Password:hashpassword,
        // profileImg,
        Address:Addressid?._id,
        UserInformation:UserInformationId?._id,
        PhoneNumber:phone,
        Email:email
    })

    await User.create({
        Username:UserName,
        Role,
        UseProfileRHV:Profile?._id
    })

    res.status(201).json({message:`User ${Username} is Created`,status:201,success:true})

})

export default Registration;