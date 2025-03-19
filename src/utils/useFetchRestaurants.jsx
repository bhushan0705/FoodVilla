// // it will go to the Body.jsx
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {FETCH_MENU_URL} from '../Constant'

// const useFetchRestaurants = () => {

//     let [allRestaurants, setAllRestaurants] = useState([]); // 🔥 Original data
//     let [restaurants, setRestaurant] = useState([]); // 🔥 Filtered data
//     let [errorMessage, setErrorMessage] = useState("");
//     let [loading, setLoading] = useState(true);



//   // fetching the data from api
//   async function fetchRestaurants() {
//     try {
//       // let response = await fetch(
//       //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection="
//       // );
//       let response = await fetch(FETCH_MENU_URL);
//       let data = await response.json();

//       let restaurants = 
//       data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       console.log(data.data);
//       console.log(restaurants.map((element)=>{
//         return element.info.name
//       }));

//       // console.log(restaurants.map((element)=>{
//       //   return element
//       // }));
      
      
      

//       if (restaurants && restaurants.length > 0) {
//         setAllRestaurants(restaurants); //  Store original data
//         setRestaurant(restaurants); 
//       } 
//       else {
//         setErrorMessage("No restaurants found ❌");
//         setRestaurant([]);
//       }
//     } 
//     catch (error) {
//       console.error("Error fetching data:", error);
//       setErrorMessage("Failed to load restaurants ");
//     } 
//     // for loading the 
//     finally {
//       setLoading(false);
//     }
//   }

//   // calling the fetched data
//   useEffect(() => {
//     fetchRestaurants();
//     // 1.5
//   }, []);

//   return [allRestaurants, restaurants, errorMessage, loading, setRestaurant, setErrorMessage];

// }

// export default useFetchRestaurants;









// 2nd one


// it will go to the Body.jsx
import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../Constant";

// Use an alternative proxy URL for testing
const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";

const useFetchRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurant] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchRestaurants() {
    try {
      let response = await fetch(PROXY_URL + FETCH_MENU_URL);
      let data = await response.json();

      let restaurantsData =
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      console.log(data.data);
      console.log(restaurantsData.map((element) => element.info.name));

      if (restaurantsData.length > 0) {
        setAllRestaurants(restaurantsData);
        setRestaurant(restaurantsData);
      } else {
        setErrorMessage("No restaurants found ❌");
        setRestaurant([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Failed to load restaurants ");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return [allRestaurants, restaurants, errorMessage, loading, setRestaurant, setErrorMessage];
};

export default useFetchRestaurants;
















































// // pure form
// // it will go to the Body.jsx
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {FETCH_MENU_URL} from '../Constant'

// const useFetchRestaurants = () => {

//     let [allRestaurants, setAllRestaurants] = useState([]); // 🔥 Original data
//     let [restaurant, setRestaurant] = useState([]); // 🔥 Filtered data
//     let [errorMessage, setErrorMessage] = useState("");
//     let [loading, setLoading] = useState(true);



//   // fetching the data from api
//   async function fetchRestaurants() {
//     try {
//       // let response = await fetch(
//       //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection="
//       // );
//       let response = await fetch(FETCH_MENU_URL);
//       let data = await response.json();

//       let restaurants = 
//       data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       console.log(data.data);
      
      

//       if (restaurants && restaurants.length > 0) {
//         setAllRestaurants(restaurants); //  Store original data
//         setRestaurant(restaurants); 
//       } 
//       else {
//         setErrorMessage("No restaurants found ❌");
//         setRestaurant([]);
//       }
//     } 
//     catch (error) {
//       console.error("Error fetching data:", error);
//       setErrorMessage("Failed to load restaurants ");
//     } 
//     // for loading the 
//     finally {
//       setLoading(false);
//     }
//   }

//   // calling the fetched data
//   useEffect(() => {
//     fetchRestaurants();
//     // 1.5
//   }, []);

//   return [allRestaurants, restaurant, errorMessage, loading, setRestaurant, setErrorMessage];

// }

// export default useFetchRestaurants;


















