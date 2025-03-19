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
































// import { createSlice } from "@reduxjs/toolkit";


// // click to + icon then it dispatches the action and then call to the reducer and 
// //              then reducer changes the slice inside the store. 

// const cartSlice = createSlice({
//     name:"cart",
//     initialState: {
//         item:[]
//     },
//     reducers:{
//         // action : (state, action)=>{rerducer function} 
//         addItem:(state, action)=>{
//             // state - initial state
//             // action - data which is comming in to it
//              state.item.push(action.payload) // data which is coming in to it is payload. 
//             // do not return anything from here (dont use the return )

//         },
//         removeItem: (state, action) => {
//             state.item.pop()
//           },
//         clearCart:(state)=>{
//             state.item =[]
//         }
//     }
// });

// // export the all actions here
// export const {addItem, removeItem, clearCart} = cartSlice.actions;

// export default cartSlice.reducer;






















// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name:"cart",
//     initialState:{
//         item:[],
//         // total:0
//     },
//     reducers:{
//         addItem:(state, action)=>{
//             let newItem = action.payload;
//             state.item.push(newItem)
//             const existingItem= state.item.find((item)=>item.id=== newItem.id);
//             {existingItem ? 
//                 console.log("data is already exist"):
//                 console.log("data is not exist")
//             }
//         },
//         decreaseQuantity:(state, action)=>{
//             let decreaseItem = action.payload;
//             let indexing=state.item.findIndex((item)=>item.id===decreaseItem.id);
//             if(state.item[indexing].quan > 1){
//                 state.item[indexing].quan -=1;
//             }
//             else{
//                 state.item.splice(indexing,1);
//             }

//         },
//         increaseQuantity:(state, action)=>{
//             let increaseItem = action.payload;
//             let indexing = state.item.findIndex((item)=>item.id === increaseItem.id);
//             if(state.item[indexing].quan<5){
//                 state.item[indexing].quan +=1;
//             }
//         },
//         clearCart:(state)=>{
//             state.item=[]
//         }
        
//     }
// })

// export const {addItem, decreaseQuantity, increaseQuantity,clearCart} = cartSlice.actions;


// export default cartSlice.reducer;