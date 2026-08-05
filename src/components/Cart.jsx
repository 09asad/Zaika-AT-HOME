import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="m-3 p-3">
            <h1 className="text-center text-2xl font-bold py-3">Cart</h1>
            <div className="w-6/12 m-auto border">
                {cartItems.length === 0 && (
                    <h1 className="text-center m-3 p-3">Cart is empty. Add Items to the cart</h1>
                )}
                <ItemList items={cartItems}/>
            </div> 
            <div className="text-center">
                <button className="m-2 p-2 bg-red-400 hover:bg-red-600 text-white rounded-lg cursor-pointer"
                onClick={handleClearCart}>
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;