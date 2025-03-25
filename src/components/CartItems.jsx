import React from "react";
import { useDispatch } from "react-redux";
import { incrementQuantity, removeItem } from "../utils/cartSlice";
import { extractCostNumber } from "../utils/parseCost";

const CartItems = ({ element, id }) => {
  const name = element?.info?.name || element?.name || "No name available";
  const costForTwo = element?.info?.costForTwo || element?.costForTwo || "";
  const imageId =
    element?.info?.cloudinaryImageId || element?.cloudinaryImageId || "";
  const costNumber = extractCostNumber(costForTwo);
  const img_url = "https://media-assets.swiggy.com/swiggy/image/upload/";

  const dispatch = useDispatch();

  function handleRemoveOne(item) {
    dispatch(removeItem(item));
  }

  function handleAddOne(item) {
    dispatch(incrementQuantity(item));
  }

  return (
    <li key={id} className="mb-2">
      <div className="flex items-center justify-between border-2 m-2 p-2">
        <img
          src={`${img_url}${imageId}`}
          alt={name}
          className="w-20 h-15 object-cover rounded-lg mb-3"
        />
        <p className="font-medium">🧾 {name}</p>
        <p>💰 Cost: ₹{(costNumber / 2) * element.quantity}</p>

        <div className="flex items-center justify-center gap-1.5">
          <button
            className="p-4 h-4 w-20 bg-amber-500 flex items-center justify-center cursor-pointer"
            onClick={() => handleRemoveOne(element)}
          >
            -
          </button>

          <p className="font-semibold text-lg">Qty: {element.quantity || 1}</p>

          <button
            onClick={() => handleAddOne(element)}
            className="p-4 h-4 w-20 bg-amber-500 flex items-center justify-center cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
