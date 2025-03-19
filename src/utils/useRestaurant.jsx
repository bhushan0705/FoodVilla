import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../Constant";

const useRestaurant = (id) => {
  const [restaurants, setRestaurant] = useState(null); // Start as null
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      // Do not append id to FETCH_MENU_URL – fetch the full list instead.
      let response = await fetch(FETCH_MENU_URL);
      let result = await response.json();
      // console.log(result);

      // Find the restaurant matching the given ID from the list
      let restaurantData =
        result.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          ?.find((element) => element.info.id === id)?.info;

      // Get the menu data (all restaurants info)
      let menuData =
        result.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setRestaurant(restaurantData);
      setMenuItems(menuData.map((item) => item?.info));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return [restaurants, menuItems, loading];
};

export default useRestaurant;























// // it will go to the RestaurantMenu.jsx
// import React, { useEffect, useState } from 'react'
// import {FETCH_MENU_URL} from '../Constant'
// const useRestaurant = (id) => {
    
//     let [restaurant, setRestaurant] = useState(null);  //Start as null
//     let [menuItems, setMenuItems] = useState([]); 
//     let [loading, setLoading] = useState(true);
  
//     async function fetchData() {
//       try {
//         let response = await fetch(FETCH_MENU_URL + id);
  
//         let result = await response.json();
//         // console.log(result);
        
  
//         //finding restaurant by matching ID(copied from chatgpt but i can explain)
//         let restaurantData =
//           result.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.
//           restaurants?.find(
//             (element) => element.info.id === id)?.info;
  
//         //   let restaurantData1 = 
//         // result.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//         // console.log(restaurantData1);
        
  
//         let menuData = 
//         result.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.info;
  
  
//           console.log(result.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle);
  
  
//         setRestaurant(restaurantData);
//         setMenuItems(menuData.map((item) => item?.action?.text));
//       }
//       catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       finally {
//         setLoading(false);
//       }
//     }
  
//     useEffect(() => {
//       fetchData();
//     }, [id]);

    

//   return [restaurant, menuItems, loading];

// }

// export default useRestaurant