// it will go to the Body.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FETCH_MENU_URL } from "../Constant";

const useFetchRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); // 🔥 Original data
  const [restaurants, setRestaurant] = useState([]); // 🔥 Filtered data
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // fetching the data from api
  async function fetchRestaurants() {
    try {
      const response = await fetch(FETCH_MENU_URL);
      const data = await response.json();

      const restaurants =
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants && restaurants.length > 0) {
        setAllRestaurants(restaurants); //  Store original data
        setRestaurant(restaurants);
      } else {
        setErrorMessage("No restaurants found ❌");
        setRestaurant([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Failed to load restaurants ");
    } finally {
      // for loading the
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRestaurants();
    // 1.5
  }, []);

  return [
    allRestaurants,
    restaurants,
    errorMessage,
    loading,
    setRestaurant,
    setErrorMessage,
  ];
};

export default useFetchRestaurants;
