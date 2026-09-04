import {createSlice} from "@reduxjs/toolkit"
import { jwtDecode } from "jwt-decode";
import { User } from "../../../../packages/types";

interface Intiallstate{
    Route:String|null
    token:String,
}

const initialState:Intiallstate={
    Route:'',
    token:''
}


const AppSlice =createSlice({
    name:"AppSlice",
    initialState,
    reducers:{
        SetRoute:(state,action):void=>{
            state.Route=action.payload
        },
        SetToken:(state,action):void=>{
            state.token=action.payload
            console.log("Token set in AppSlice:", action.payload); // Debugging line
        },
    }
})

export const {SetRoute,SetToken}=AppSlice.actions

export const GetRoute=(state:any):string=>state.AppSlice.Route

export const GetToken=(state:any):string=>state.AppSlice.token

export const Authenticate=(state:any):User=>{
    
        const token=state.AppSlice.token
        
        if(!token){
            // window.location.href="/Auth"
    return {Username:'',MemberId:'',Role:''};                
            }
            const decodedToken = jwtDecode<User>(token);

            return {Username:decodedToken.Username,MemberId:decodedToken.MemberId,Role:decodedToken.Role};
}

export default AppSlice.reducer
