import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authReducer from './authSlice'




const store = configureStore({
    //this will make connection between slices
    reducer :{
        //name of slice : slice
        cart: cartSlice,
        auth: authReducer,
    }
})

export default store;