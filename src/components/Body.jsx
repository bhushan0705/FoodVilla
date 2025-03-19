import React, { useContext, useState } from "react";
import Shrimmer from "./Shrimmer";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";
import { FETCH_MENU_URL } from "../Constant";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { extractCostNumber } from "../utils/parseCost";
import Login from "./LoginForm";
import SignupForm from "./SignupForm";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

// for loading screen it is called shrimmer screen loading - website(https://mui.com/)

const img_url = "https://media-assets.swiggy.com/swiggy/image/upload/";

const Body = () => {
  let user = useSelector((state) => state.auth.user);

  // console.log(user.name);

  // taking data from useContext
  // let {user} = useContext(UserContext)
  let [search, setSearch] = useState("");

  // here also the hook is created(useFetchRestaurants.jsx)
  // setRestaurant and setErrorMessage are in function so we take that differently
  let [
    allRestaurants,
    restaurants,
    errorMessage,
    loading,
    setRestaurant,
    setErrorMessage,
  ] = useFetchRestaurants([]);

  // search bar functionality
  function handleSearch() {
    if (!search.trim()) {
      // if just spaces are added then it will show error but all items are going to show
      setErrorMessage("Please enter valid item ❌");
      setRestaurant(allRestaurants);
      return;
    }
    // using optional chaining for safety
    const filteredData = allRestaurants.filter((item) =>
      item?.info?.name?.toLowerCase().includes(search.toLowerCase().trim())
    );

    if (filteredData.length === 0) {
      setErrorMessage("No matching restaurants found ❌");
    } else {
      setErrorMessage("");
    }

    setRestaurant(filteredData);
  }

  // let offline = true;
  let isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1 className="text-center text-red-600 mt-10">
        You are offline , check your internet connection!!
      </h1>
    );
  }

  function handleClick() {
    <RestaurantMenu></RestaurantMenu>;
  }

  return (
    <div className="text-white min-h-screen p-5">
      {/* <RestaurantMenu></RestaurantMenu> */}
      {/* <p className=" bg-red-600" >bhushan</p> */}
      <div className="search-container text-center mb-5">
        <input
          type="text"
          placeholder="Search item here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-4 border border-gray-600 rounded mr-2 bg-gray-800 text-white"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-4 rounded cursor-pointer bg-green-600 text-white"
        >
          Search
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>

      {SignupForm ? (
        <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2 border-2 border-orange-500 rounded-lg">
          {loading ? (
            // when loading, the skeleton loading screen appears
            <Shrimmer />
          ) : (
            // when loading is completed this will render
            restaurants.map((element) => (
              <Link to={"/restaurant/" + element.info.id} key={element.info.id}>
                <div className="p-12 border-2 border-green-600 flex flex-col items-center rounded-lg bg-gray-800 gap-3">
                  <img
                    onClick={handleClick}
                    src={`${img_url}${element.info.cloudinaryImageId}`}
                    alt={element.info.name}
                    className="img_from_api h-[200px] w-4/5 object-cover rounded-lg cursor-pointer"
                  />
                  <h2 className="font-bold text-center">
                    {element.info.name}
                  </h2>
                  {/* chatgpt to nummber */}
                  <p>
                    Cost for Two: ₹
                    {extractCostNumber(element.info.costForTwo) / 2}
                  </p>
                  <p>Area: {element.info.areaName}</p>
                  {/* taking the props from app */}
                  {element.info.areaName === "Rohini" ? (
                    <p>
                      This restaurant is <b>near</b> you <b>{user.name}</b>
                    </p>
                  ) : (
                    <p>
                      This restaurant <b>far</b> from you <b>{user.name}</b>
                    </p>
                  )}
                  <button className="px-4 py-2 cursor-pointer bg-green-600 border-0 rounded text-white">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))
          )}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Body;



























// import React, {  useContext, useState } from "react";
// import Shrimmer from "./Shrimmer";
// import RestaurantMenu from "./RestaurantMenu";
// import { Link } from "react-router-dom";
// import {FETCH_MENU_URL} from '../Constant'
// import useFetchRestaurants from "../utils/useFetchRestaurants";
// import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";



// // for loading screen it is called shrimmer screen loading - website(https://mui.com/)


// const img_url = "https://media-assets.swiggy.com/swiggy/image/upload/";

// const Body = () => {


//   // taking data from useContext
//   let {user} = useContext(UserContext)

//   let [search, setSearch] = useState("");

// // here also the hook is created(useFetchRestaurants.jsx)
// // setRestaurant and setErrorMessage are in function so we take that differently 
//   let [allRestaurants,restaurant,errorMessage,loading,
//     setRestaurant, setErrorMessage] = useFetchRestaurants([])

//   //search bar  functionality
//   function handleSearch() {
//     if (!search.trim()) { 
//       // if the just spaces added then it will show error but all items are going to show
//       setErrorMessage("Please enter valid item ❌");
//       setRestaurant(allRestaurants);
//       return;
//     }
// // here the ? mark is called optioal chaining
//     const filteredData = allRestaurants.filter((item) =>
//       item?.info?.name?.toLowerCase().includes(search.toLowerCase().trim())
//     );

//     if (filteredData.length === 0) {
//       setErrorMessage("No matching restaurants found ❌");
//     } 
//     else {
//       setErrorMessage("");
//     }

//     setRestaurant(filteredData);
//   }

//   // let offline = true;
//   let isOnline = useOnline();
//   if(!isOnline){
//     return <h1>You are offline , check your internet connection!!</h1>
//   }


//   function handleClick(){
//     <RestaurantMenu></RestaurantMenu>
//   }
  

//   return (
//     <div style={{ color: "#fff", minHeight: "100vh", padding: "20px" }}>
//        {/* <RestaurantMenu></RestaurantMenu> */}
//       {/* <p className=" bg-red-600" >bhushan</p> */}
//       <div className="search-container" style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Search item here"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "1rem",
//             border: "1px solid #333",
//             borderRadius: "5px",
//             marginRight: "10px",
//             backgroundColor: "#333",
//             color: "#fff",
//           }}
//         />
//         <button
//           onClick={handleSearch} 
//           style={{
//             padding: "1rem 2rem",
//             border: "none",
//             borderRadius: "0.6rem",
//             cursor: "pointer",
//             backgroundColor: "#1DB954",
//             color: "#fff",
//           }}
//         >
//           Search
//         </button>
//         {errorMessage && <p style={{ color: "#FF5555" }}>{errorMessage}</p>}
//       </div>

      
//       <div className="restaurant-list" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", padding: "10px", border:"2px solid orange", borderRadius: "10px" }}>
//         {loading
//         // when the loading the screen - skeleton loading
//           ? <Shrimmer></Shrimmer>
//           :
//           // when loading is completed this will render
        
//           restaurant.map((element) => (
//             <Link to={"/restaurant/" + element.info.id} key={element.info.id}>
//               <div 
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
//                 <p>Area: {element.info.areaName}</p>

//                 {/* taking the props from app */}
//                 {
//                   element.info.areaName =="Rohini" ? <p>This restaurant is <b>near</b> you <b>{user.name}</b> </p>:
//                   <p>This restaurant <b>far</b> from you <b>{user.name}</b></p>
//                 }
              
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
//             </Link>
//             )
//             )
//           }
//       </div>
//     </div>
//   );
// };

// export default Body;
