// it will go to the RestaurantMenu.jsx
import React, { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../Constant";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null); //Start as null
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(FETCH_MENU_URL + id);

      const result = await response.json();
      //finding restaurant by matching ID(copied from chatgpt but i can explain)
      const restaurantData =
        result.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.find(
          (element) => element.info.id === id
        )?.info;

      const menuData =
        result.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

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

  return [restaurant, menuItems, loading];
};

export default useRestaurant;
