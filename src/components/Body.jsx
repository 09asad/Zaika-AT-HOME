import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";        // import two hooks from react
// useState → for storing and changing data in a component (like a dynamic variable)
// useEffect → for running code automatically when the component loads or updates (like fetching data).
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // Local state variable -> Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);     // ([]) means initially empty listOfRestaurants passes so it shows shimmer UI 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
    const [searchText, setSearchText] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("api/dapi/restaurants/list/v5?lat=28.4784884&lng=77.50353489999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);  
        // Optional Chaining ( ?. optional chaining operator)
        const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return(
            <h1 className="m-4 font-bold">Looks like you're offline! Please check your internet connection⚠️</h1>
        );
    }

    // Conditional Rendering
    if(listOfRestaurants.length === 0){
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="px-2 py-0.5 mx-1 bg-gray-200 hover:bg-blue-200 rounded-lg cursor-pointer" 
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search🔍</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-3 py-0.5 bg-gray-200 hover:bg-blue-200 rounded-lg cursor-pointer"
                        onClick={() => {
                        const topRated = listOfRestaurants.filter((res) =>
                            res.info.avgRating >= 4.5
                        );
                        setFilteredRestaurants(topRated);
                    }}> Top Rated Restaurants
                    </button>
                </div>  
            </div>
            <div className="flex flex-wrap">
                {(filteredRestaurants.length > 0 ? filteredRestaurants : listOfRestaurants).map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    )
                )}
            </div>
        </div>
    );
};


export default Body;