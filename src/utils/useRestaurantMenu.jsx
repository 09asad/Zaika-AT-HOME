// custom hook file — using mock data instead of Swiggy API
import { useState, useEffect } from "react";
import { mockMenu } from "../utils/mockMenu"; 

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (!resId) return;

    // Simulate fetching data from mockMenu
    const fetchMockData = () => {
      // find restaurant by ID (since mockMenu is an array)
      const restaurantData = mockMenu.find((menuObj) => menuObj[resId]);

      if(restaurantData){
        setResInfo(restaurantData[resId].data.cards);
      }
      else{
        console.warn(`No mock data found for restaurant ID: ${resId}`);
        setResInfo(null);
      }
    };

    fetchMockData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
