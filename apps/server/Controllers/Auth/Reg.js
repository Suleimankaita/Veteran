import bcrypt from 'bcrypt'
import asynchandler from "express-async-handler"
import User from "../../model/Member.js" 
import RHVProfiles from '../../model/RHVProfiles.js'
import CheckField from '../../utils/CheckField.js'
import UserAddress from '../../model/UserAddress.js'
import RHVUserInformation from '../../model/RHVUserInformation.js'
import { ConvertName } from '../../utils/NameConverTer.js'

    const Registration =asynchandler (async(req,res)=>{

    const {Username,password,firstName,lastName ,phone,email,Role,occupation,organization,skills,education,maritalStatus,interests,address,state,lga,ward,country,dateOfBirth,emergencyPhone,emergencyRelationship}=req.body
    
    const img=req.file?.filename

    console.log(img)

      const AddressFields={
        // "HouseNumber":23,
        "StreetName":address,
        "State":state,
        "LocalGov":lga,
        "Ward":ward,
        "country":country,
        "constactPhone":emergencyPhone
 }


 const UserInformationFields={
   "Occupation":occupation,
    "Organization":organization,
    "Skills":skills,
    "Qualification":education,
    "realtionship":maritalStatus,
    "emergencyRelationship":emergencyRelationship,
    "dateOfBirth":dateOfBirth,
    "AreasOfInterest":interests

 }

    const CheckFields=CheckField({Username,password,firstName,lastName ,phone,email,...UserInformationFields,...AddressFields});
    
    const UserName=ConvertName(Username);
    
    const UserFound=await User.findOne({Username:UserName}).exec()
    console.log(UserFound)
    console.log(UserName)
    if(UserFound){
        return res.status(409).json({message:"UserName Is Already Exist ",status:409,success:false})
    }
    if(!CheckFields.success)return res.status(400).json({message:CheckFields.message,status:400,success:false});

  
 

    const hashpassword=await bcrypt.hash(password,10);

    const Addressid=await UserAddress.create(AddressFields)

    const UserInformationId=await RHVUserInformation.create(UserInformationFields)

    const Profile=await RHVProfiles.create({
        Firtname:firstName,
        Lastname:lastName ,
        Password:hashpassword,
        profileImg:img,
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