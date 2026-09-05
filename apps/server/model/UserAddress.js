import mongoose from "mongoose";

const UserAddress=new mongoose.Schema({
        HouseNumber:Number,
        StreetName:String,
        State:String,
        LocalGov:String,
        Ward:String,
        constactPhone:String,
        country:String
},{
    timestamps:true
})

export default mongoose.model("RHVUserAddress",UserAddress)