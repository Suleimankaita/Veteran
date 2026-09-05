import mongoose from "mongoose";

const UserInformation =new mongoose.Schema({
     
    Occupation:String,
    Organization:String,
    Skills:String,
    Qualification:String,
    dateOfBirth:String,
    realtionship:String,
    maritalStatus:String,
    emergencyRelationship:String,
    AreasOfInterest:[String],

},{
    timestamps:true
})

export default mongoose.model("RHVUserInformation",UserInformation)