import { createSlice } from "@reduxjs/toolkit";
import { extractCostNumber } from "./parseCost";


const cartSlice = createSlice({
  name: "cart",
  initialState:{
    item:[]
  },
  reducers: {
    // ✅ Item ko cart mein add karo
    addItem: (state, action) => {
      const newItem = action.payload;  // Naya item aaya
      const existingItem = state.item.find(item => item.id === newItem.id);  // Check karo already hai kya?

      const price = extractCostNumber() / 2;  

    if (existingItem) {
        if (existingItem.quantity >= 5) {
          alert("You can't add more than 5 items");
          return;  // Ruk jao, zyada nahi chahiye
        }

        existingItem.quantity += 1;  // Quantity +1
        existingItem.totalCost = existingItem.quantity * price;  // Total cost update
      } else {
        // Naya item add karo, quantity 1 se shuru aur totalCost bhi set karo
        state.item.push({ ...newItem, quantity: 1, price: price, totalCost: price });
      }
    },

    // ❌ Cart se ek item quantity kam karo ya hatao
    removeItem: (state, action) => {
      const removeItem = action.payload;
      const index = state.item.findIndex(item => item.id === removeItem.id);  // Item ka index dhoondo

      if (index !== -1) {
        const price = state.item[index].price;  // Price already stored hai

        if (state.item[index].quantity > 1) {
          state.item[index].quantity -= 1;  // Quantity kam karo
          state.item[index].totalCost = state.item[index].quantity * price;  // Total cost update
        } else {
          state.item.splice(index, 1);  // Quantity 1 thi, pura item hata do
        }
      }
    },

    // ➕ Quantity badhao ek item ki
    incrementQuantity: (state, action) => {
      const index = state.item.findIndex(item => item.id === action.payload.id);  // Index dhoondo

      if (index !== -1) {
        const price = state.item[index].price;  // Stored price use karo

        if (state.item[index].quantity < 5) {
          state.item[index].quantity += 1;  // Quantity +1
          state.item[index].totalCost = state.item[index].quantity * price;  // Total cost update
        } else {
          alert("You can't add more than 5");  // Limit cross nahi karna
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
