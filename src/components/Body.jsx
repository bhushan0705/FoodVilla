import React, { useState } from "react";
import Shrimmer from "./Shrimmer";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import useOnline from "../utils/useOnline";
import { extractCostNumber } from "../utils/parseCost";
import Login from "./LoginForm";
import SignupForm from "./SignupForm";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

// for loading screen it is called shrimmer screen loading - website(https://mui.com/)

const img_url = "https://media-assets.swiggy.com/swiggy/image/upload/";

const Body = () => {
  const user = useSelector((state) => state.auth.user);
  const [search, setSearch] = useState("");
  const [
    allRestaurants,
    restaurants,
    errorMessage,
    loading,
    setRestaurant,
    setErrorMessage,
  ] = useFetchRestaurants([]);

  function handleSearch() {
    if (!search.trim()) {
      setErrorMessage("Please enter valid item ❌");
      setRestaurant(allRestaurants);
      return;
    }
    // here the ? mark is called optional chaining
    const filteredData = allRestaurants.filter((item) =>
      item?.info?.name?.toLowerCase().includes(search.toLowerCase().trim())
    );
    console.log(restaurants);

    if (filteredData.length === 0) {
      setErrorMessage("No matching restaurants found ❌");
    } else {
      setErrorMessage("");
    }

    setRestaurant(filteredData);
  }

  // const offline = true;
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>You are offline , check your internet connection!!</h1>;
  }

  function handleClick() {
    <RestaurantMenu />;
  }

  return (
    <div style={{ color: "#fff", minHeight: "100vh", padding: "20px" }}>
      {/* <RestaurantMenu></RestaurantMenu> */}
      <div
        className="search-container"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        <input
          type="text"
          placeholder="Search item here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "1rem",
            border: "1px solid #333",
            borderRadius: "5px",
            marginRight: "10px",
            backgroundColor: "#333",
            color: "#fff",
          }}
        />
        <button
          onClick={handleSearch}
          className="px-8 py-4 border-0 rounded-sm cursor-pointer bg-green-400"
        >
          Search
        </button>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      </div>

      {SignupForm ? (
        <div>
          {loading ? (
            // when the loading the screen - skeleton loading
            <Shrimmer />
          ) : (
            // when loading is completed this will render
            <div className="grid grid-cols-3 gap-10 p-4 max-w-8xl mx-auto">
              {restaurants.map((element) => (
                <Link
                  to={"/restaurant/" + element.info.id}
                  key={element.info.id}
                >
                  <div
                    style={{
                      padding: "3rem",
                      border: "2px solid #1DB954",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      borderRadius: "10px",
                      backgroundColor: "#222",
                      gap: "10px",
                    }}
                    className="grid grid-cols-3 gap-4 p-4 border-2 border-orange-500 rounded-xl"
                  >
                    <img
                      onClick={handleClick}
                      src={`${img_url}${element.info.cloudinaryImageId}`}
                      alt={element.info.name}
                      className="h-[200px] w-[80%] object-cover rounded-xl cursor-pointer sm:h-[100px w-[50%] ]"
                    />
                    <h2 className="font-bold text-center">
                      {element.info.name}
                    </h2>
                    <p>
                      {" "}
                      Cost for Two: ₹
                      {extractCostNumber(element.info.costForTwo) / 2}
                    </p>
                    <p>Area: {element.info.areaName}</p>

                    {element.info.areaName == "Rohini" ? (
                      <p>
                        This restaurant is <b>near</b> you <b>{user.name}</b>{" "}
                      </p>
                    ) : (
                      <p>
                        This restaurant <b>far</b> from you <b>{user.name}</b>
                      </p>
                    )}

                    <button
                      style={{
                        padding: "0.6rem 1rem",
                        cursor: "pointer",
                        backgroundColor: "#1DB954",
                        border: "none",
                        borderRadius: "5px",
                        color: "#fff",
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Body;
