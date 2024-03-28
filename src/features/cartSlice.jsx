import { createSlice } from "@reduxjs/toolkit"
import item from "../plants.json"
const initialState={
    cart:[],
    items:item,
    totalQuantity:0,
    totalPrice:0,

};

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
            window.alert("Added to Cart")
        },
        removeItem:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload)
        }
        
    },
})


export const{addToCart,removeItem}=cartSlice.actions;
export default cartSlice.reducer;