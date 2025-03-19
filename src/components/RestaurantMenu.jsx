import { useParams } from "react-router-dom";
import Shrimmer from "./Shrimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { extractCostNumber } from "../utils/parseCost";

const img_url = "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, menuItems, loading] = useRestaurant(id);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const cost = extractCostNumber(restaurant?.costForTwo || "₹0");

  if (loading) return <Shrimmer />;
  if (!restaurant)
    return <p className="text-center text-red-600 mt-10 dark:text-red-400">Restaurant not found.</p>;

  return (
  <div className="min-h-screen bg-green-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      {/* Restaurant Info */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700 overflow-hidden border border-gray-300 dark:border-gray-700">
          <img
            src={img_url + restaurant.cloudinaryImageId}
            alt={restaurant.name}
            className="w-full md:w-1/3 h-60 object-cover"
          />
          <div className="p-6 w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-300">
              {restaurant.name}
            </h1>
            <p className="mb-2 text-lg text-gray-700 dark:text-gray-400">
              📍 Area: {restaurant.areaName}
            </p>
            <p className="mb-2 text-lg text-gray-700 dark:text-gray-400">
              ⭐ Rating: {restaurant.avgRating}
            </p>
            <p className="mb-4 text-lg text-gray-700 dark:text-gray-400">
              💰 Cost: ₹{cost}
            </p>
            <button
              onClick={() => handleAddItem(restaurant)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition transform hover:scale-105"
            >
              Add Restaurant to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2 text-blue-700 dark:text-blue-300">
          Menu Items
        </h2>
        {menuItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md dark:shadow-gray-700 p-4 flex flex-col justify-between"
              >
                <p className="text-xl font-medium mb-4 text-gray-900 dark:text-gray-100">
                  {item.name}
                </p>
                <button
                  onClick={() => handleAddItem(item)}
                  className="mt-auto px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            No menu items available for this restaurant.
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;

