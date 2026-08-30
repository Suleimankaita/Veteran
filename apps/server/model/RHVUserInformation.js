import mongoose from "mongoose";

const UserInformation =new mongoose.Schema({
     
    Occupation:String,
    Organization:String,
    Skills:String,
    Qualification:String,
    realtionship:String,
    AreasOfInterest:[String],

},{
    timestamps:true
})

export default mongoose.model("RHVUserInformation",UserInformation)