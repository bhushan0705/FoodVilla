

import { useDispatch, useSelector } from "react-redux";
import { extractCostNumber } from "../utils/parseCost";
import store from "../utils/store";
import { clearCart, incrementQuantity, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  console.log("Cart Items:", cartItems); // 🔥 Just to peek inside

  const totalCartCost = cartItems.reduce((acc, item) => {
    const costString = item?.info?.costForTwo || item?.costForTwo || "₹0";
    const costPerItem = extractCostNumber(costString) / 2;
    return acc + (costPerItem * item.quantity);
  }, 0);
  



  const img_url = "https://media-assets.swiggy.com/swiggy/image/upload/";

  let dispatch = useDispatch()

  function handleClear(){
    dispatch(clearCart())
  }

  function handleRemoveOne(item){
    dispatch(removeItem(item))
  }

  function handleAddOne(item){
    dispatch(incrementQuantity(item))
  }

  return (

    <div className="p-4">

      <div className="flex justify-between">
      <p className="font-semibold text-lg">Length of cart: {cartItems.length}</p>
      <button onClick={()=>handleClear()} className="border-2 border-amber-100 p-1 bg-amber-200 cursor-pointer">Clear Cart</button>
    
      <p>TOTAL PRICE: ₹{totalCartCost}</p>
      </div>
  


      <ul className="mt-5">
        {
        cartItems.map((element, id) => {
          const name = element?.info?.name || element?.name || "No name available";
          const costForTwo = element?.info?.costForTwo || element?.costForTwo || "";
          const imageId = element?.info?.cloudinaryImageId || element?.cloudinaryImageId || "";
          const costNumber = extractCostNumber(costForTwo);
          
          
          return (
            
            <li key={id} className="mb-2" >
              <div className="flex items-center justify-between border-2 m-2 p-2">
                <img
                src={`${img_url}${imageId}`}
                alt={name}
                className="w-20 h-15 object-cover rounded-lg mb-3"
              />
              <p className="font-medium">🧾 {name}</p>
              <p>💰  Cost: ₹{costNumber/2 * element.quantity}</p>
              
              <div className="flex items-center justify-center gap-1.5"> 
              <button
                className="p-4 h-4 w-20 bg-amber-500 flex items-center justify-center cursor-pointer"
                onClick={() => handleRemoveOne(element)}
              >
              -
              </button>

          <p className="font-semibold text-lg">Qty: {element.quantity || 1}</p>

          <button onClick={() => handleAddOne(element)}
                className="p-4 h-4 w-20 bg-amber-500 flex items-center justify-center cursor-pointer"
            // Quantity increment logic will be added here later
          >
                +
          </button>
          </div>

              
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-4 italic text-gray-500">This is cart 💕</p>
    </div>
  );
};

export default Cart;






























// import { useDispatch, useSelector } from "react-redux";
// import { extractCostNumber } from "../utils/parseCost";
// import store from "../utils/store";
// import { clearCart, removeItem } from "../utils/cartSlice";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.item);
//   console.log("Cart Items:", cartItems); // 🔥 Just to peek inside


//   const img_url = "https://media-assets.swiggy.com/swiggy/image/upload/";

//   let dispatch = useDispatch()

//   function handleClear(){
//     dispatch(clearCart())
//   }

//   function handleOne(item){
//     dispatch(removeItem(item))
//   }

//   return (

//     <div className="p-4">

//       <div className="flex justify-between">
//       <p className="font-semibold text-lg">Length of cart: {cartItems.length}</p>
//       <button onClick={()=>handleClear()} className="border-2 border-amber-100 p-1 bg-amber-200 cursor-pointer">Clear Cart</button>
//       </div>
  


//       <ul className="mt-5">
//         {
//         cartItems.map((element, id) => {
//           const name = element?.info?.name || element?.name || "No name available";
//           const costForTwo = element?.info?.costForTwo || element?.costForTwo || "";
//           const imageId = element?.info?.cloudinaryImageId || element?.cloudinaryImageId || "";
//           const costNumber = extractCostNumber(costForTwo);
          
//           return (
            
//             <li key={id} className="mb-2" >
//               <div className="flex items-center justify-between border-2 m-2 p-2">
//                 <img
//                 src={`${img_url}${imageId}`}
//                 alt={name}
//                 className="w-20 h-15 object-cover rounded-lg mb-3"
//               />
//               <p className="font-medium">🧾 {name}</p>
//               <p>💰  Cost for Two: ₹{costNumber/2}</p>
              
//               <div className="flex items-center justify-center gap-1.5"> 
//               <button
//                 className="p-4 h-4 w-20 bg-amber-500 flex items-center justify-center cursor-pointer"
//                 onClick={() => handleOne(element)}
//               >
//               -
//               </button>

//           <p className="font-semibold text-lg">Qty: {element.quantity || 1}</p>

//           <button
//                 className="p-4 h-4 w-20 bg-amber-500 flex items-center justify-center cursor-pointer"
//             // Quantity increment logic will be added here later
//           >
//                 +
//           </button>
//           </div>

              
//               </div>
//             </li>
//           );
//         })}
//       </ul>

//       <p className="mt-4 italic text-gray-500">This is cart 💕</p>
//     </div>
//   );
// };

// export default Cart;
