import { use, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In👤");

    const onlineStatus = useOnlineStatus();

    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);      // useSelector = Hook to read data from Redux store
    console.log(cartItems);
 
    return (
        <div className="flex justify-between bg-gray-200 shadow-sm">
            <div className="logo-container">
                <Link to="/"><img className="m-2 w-25 rounded-full" src={LOGO_URL} /></Link>
            </div>
            <div className="flex items-center p-4 m-4">
                <button className="px-3">
                    Status: {onlineStatus ? "🟢" : "🔴"}</button>
                <button className="px-3 m-2 py-2 rounded-xl cursor-pointer hover:bg-blue-200" >
                    <Link to="/grocery">Grocery🧺</Link></button>
                <button className="px-3 m-2 py-2 rounded-xl cursor-pointer hover:bg-blue-200" >
                    <Link to="/about">About Usℹ️</Link></button>
                <button className="px-3 m-2 py-2 rounded-xl cursor-pointer hover:bg-blue-200" >
                    <Link to="/contact">Contact Us📞</Link></button>
                <button className="px-3 m-2 py-2 rounded-xl cursor-pointer hover:bg-blue-200" >
                    <Link to="/cart">Cart🛒({cartItems.length})</Link></button>
                <button className="px-3 m-2 py-2 rounded-xl cursor-pointer hover:bg-blue-200" id="login"
                    onClick = {() => {
                        btnName === "Log In👤"
                            ? setBtnName("Log Out👤")
                            : setBtnName("Log In👤");
                    }}> {btnName}
                </button>
            </div>
        </div>
    );
};

export default Header;