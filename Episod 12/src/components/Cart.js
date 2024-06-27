import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearCart())
  }

  return (
    <div className="m-4 p-4 font-bold text-center">
      <h1 className="text-2xl">Cart</h1>
      <button onClick={handleClose} className="font-bold text-2xl bg-black text-white rounded p-1 cursor-pointer" >Clear Cart</button>
      {cartItems.length === 0 && (
        <h1>Cart is empty. Add item to the cart!</h1>
      )}
      <div className="mx-32">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
