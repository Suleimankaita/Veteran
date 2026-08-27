import mongoose from "mongoose";

const RHVProfilesSchema=new mongoose.Schema({
    Firtname:String,
    Lastname:String,
    Password:String,
    profileImg:String,
    Address:{
        type:mongoose.Schema.ObjectId,
        ref:"RHVUserAddress"
    },
    UserInformation:{
        type:mongoose.Schema.ObjectId,
        ref:"RHVUserInformation"
    },
    PhoneNumber:{
        type:Number,
        unique:true
    },
    Email:{
        type:String,
        unique:true
    },

},{
    timestamps:true,
    timeseries:true
})

export default mongoose.model("RHVProfiles",RHVProfilesSchema)