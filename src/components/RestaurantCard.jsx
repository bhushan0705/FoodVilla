// import React from "react";

// const img_url = "https://media-assets.swiggy.com/swiggy/image/upload/";

// const RestaurantCard = () => {

//       function handleClick(){
//     <RestaurantMenu></RestaurantMenu>
//   }


//   return (
//     <div>
//     <div 
//               //  className="p-40 border-2 border-green-500 flex items-center flex-col rounded-[10px] bg-[#222] gap-[10px]"
//                 style={{
//                   padding: "3rem",
//                   border: "2px solid #1DB954",
//                   display: "flex",
//                   alignItems: "center",
//                   flexDirection: "column",
//                   borderRadius: "10px",
//                   backgroundColor: "#222",
//                   gap: "10px",
//                 }}
//               >
//                 <img
//                   className="img_from_api" onClick={handleClick}
//                   src={`${img_url}${element.info.cloudinaryImageId}`}
//                   alt={element.info.name}
//                   style={{ height: "200px", width: "80%", objectFit: "cover", borderRadius: "10px",cursor:"pointer" }}
//                 />
//                 <h2 className="font-bold text-center" >
//                   {element.info.name}</h2>
//                 <p>Cost for Two: {element.info.costForTwo}</p>
//                 <button
//                   style={{
//                     padding: "0.6rem 1rem",
//                     cursor: "pointer",
//                     backgroundColor: "#1DB954",
//                     border: "none",
//                     borderRadius: "5px",
//                     color: "#fff",
//                   }}
//                 >
//                   Add to Cart
//                 </button>
                

//               </div>
//     </div>
//   )
// }

// export default RestaurantCard