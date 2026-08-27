import mongoose from "mongoose";

const MemberSchema=new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true
    },

    UseProfileRHV:{
        type:mongoose.Schema.ObjectId,
        ref:'RHVProfiles'
    },
    Role:{
        type:String,
        enum:['Admin','Chairman','Sectery','ViceChairman','Traderer','Member'],
        default:'Member'
    }

},{
    timestamps:true
})

export default mongoose.model('MembersSchema',MemberSchema)