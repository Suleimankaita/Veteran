import {createSlice} from "@reduxjs/toolkit"

interface Intiallstate{
    Route:String|null
}

const initialState:Intiallstate={
    Route:''
}


const AppSlice =createSlice({
    name:"AppSlice",
    initialState,
    reducers:{
        SetRoute:(state,action):void=>{
            state.Route=action.payload
        }
    }
})

export const {SetRoute}=AppSlice.actions

export const GetRoute=(state:any):string=>state.AppSlice.Route

export default AppSlice.reducer
