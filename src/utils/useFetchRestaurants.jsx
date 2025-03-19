// import { useEffect, useState } from "react";
// import { FETCH_MENU_URL } from "../Constant";

// const useFetchRestaurants = () => {
//   const [allRestaurants, setAllRestaurants] = useState([]);
//   const [restaurants, setRestaurant] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(true);

//   async function fetchRestaurants() {
//     try {
//       const response = await fetch(FETCH_MENU_URL); // FIXED
//       const data = await response.json();

//       const restaurantsData =
//         data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

//       console.log(data.data);
//       console.log(restaurantsData.map((element) => element.info.name));

//       if (restaurantsData.length > 0) {
//         setAllRestaurants(restaurantsData);
//         setRestaurant(restaurantsData);
//       } else {
//         setErrorMessage("No restaurants found ❌");
//         setRestaurant([]);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setErrorMessage("Failed to load restaurants ");
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchRestaurants();
//   }, []);

//   return [allRestaurants, restaurants, errorMessage, loading, setRestaurant, setErrorMessage];
// };

// export default useFetchRestaurants;



import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../Constant";

const useFetchRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurant] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchRestaurants() {
    try {
      const response = await fetch(FETCH_MENU_URL);
      const data = await response.json();

      const restaurantsData =
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