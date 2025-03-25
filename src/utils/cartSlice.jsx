import { createSlice } from "@reduxjs/toolkit";
import { extractCostNumber } from "./parseCost";


const cartSlice = createSlice({
  name: "cart",
  initialState:{
    item:[]
  },
  reducers: {
 
    addItem: (state, action) => {
      const newItem = action.payload;  // Naya item aaya
      const existingItem = state.item.find(item => item.id === newItem.id);  

      const price = extractCostNumber() / 2;  

    if (existingItem) {
        if (existingItem.quantity >= 5) {
          alert("You can't add more than 5 items");
          return; // max items
        }

        existingItem.quantity += 1; 
        existingItem.totalCost = existingItem.quantity * price; 
      } else {
        state.item.push({ ...newItem, quantity: 1, price: price, totalCost: price });
      }
    },

    removeItem: (state, action) => {
      const removeItem = action.payload;
      const index = state.item.findIndex(item => item.id === removeItem.id);

      if (index !== -1) {
        const price = state.item[index].price;

        if (state.item[index].quantity > 1) {
          state.item[index].quantity -= 1;  
          state.item[index].totalCost = state.item[index].quantity * price;  // Total cost update
        } else {
          state.item.splice(index, 1); 
        }
      }
    },

    // ➕ Quantity badhao ek item ki
    incrementQuantity: (state, action) => {
      const index = state.item.findIndex(item => item.id === action.payload.id);  

      if (index !== -1) {
        const price = state.item[index].price; 

        if (state.item[index].quantity < 5) {
          state.item[index].quantity += 1;  // Quantity +1
          state.item[index].totalCost = state.item[index].quantity * price;  // Total cost update
        } else {
          alert("You can't add more than 5"); 
        }
      }
    },
    clearCart: (state) => {
      state.item = [];
    },
  },
});

export const { addItem, removeItem, incrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
