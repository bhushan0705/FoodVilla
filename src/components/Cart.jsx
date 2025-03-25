import { useDispatch, useSelector } from "react-redux";
import { extractCostNumber } from "../utils/parseCost";
import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);

  const totalCartCost = cartItems.reduce((acc, item) => {
    const costString = item?.info?.costForTwo || item?.costForTwo || "₹0";
    const costPerItem = extractCostNumber(costString) / 2;
    return acc + costPerItem * (item.quantity || 1);
  }, 0);

  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearCart());
  }

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <p className="font-semibold text-lg">
          Length of cart: {cartItems.length}
        </p>
        <button
          onClick={handleClear}
          className="border-2 border-amber-100 p-1 bg-amber-200 cursor-pointer"
        >
          Clear Cart
        </button>

        <p>TOTAL PRICE: ₹{totalCartCost}</p>
      </div>

      <ul className="mt-5">
        {cartItems.map((element, id) => (
          <CartItems key={id} element={element} id={id} />
        ))}
      </ul>

      <p className="mt-4 italic text-gray-500">This is cart 💕</p>
    </div>
  );
};

export default Cart;
