import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [openCategory, setOpenCategory] = useState(null);

  if (!resInfo) return <Shimmer />;

  // for Restaurant details
  const restaurantCard = resInfo.find(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  const restaurantData = restaurantCard?.card?.card?.info;

  if (!restaurantData) {
    return (
      <div className="p-4 text-center font-bold text-red-500">
        Restaurant not found ⚠️
      </div>
    );
  }

  const { name, cuisines, avgRating, costForTwoMessage, sla } = restaurantData;

  // for menu of Restaurant
  const menuCard = resInfo.find(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Menu"
  );

  const categories = menuCard?.card?.card?.categories || [];

  return (
    <div className="p-6">
      <div className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold mb-1">{name}</h1>
        <p className="text-gray-700 mb-2">
          ⭐ {avgRating} | {costForTwoMessage} | ⏱️ {sla?.deliveryTime} mins
        </p>
        <p className="text-gray-600">{cuisines?.join(", ")}</p>
      </div>

      {categories.length === 0 ? (
        <p className="text-center text-gray-500">Menu unavailable ⚠️</p>
      ) : (
        categories.map((category) => (
          <RestaurantCategory
            key={category.categoryName}
            title={category.categoryName}
            items={category.dishes}
            isOpen={openCategory === category.categoryName}
            onToggle={() =>
              setOpenCategory(
                openCategory === category.categoryName ? null : category.categoryName
              )
            }
          />
        ))
      )}
    </div>
  );
};

export default RestaurantMenu;
