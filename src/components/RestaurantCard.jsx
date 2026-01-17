import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const { id, name, cuisines, avgRating, sla, areaName, cloudinaryImageId } = resData.info;

  return (
    <Link to={`/restaurants/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="m-4 p-4 w-[270px] rounded-lg bg-gray-100 transform transition duration-200 hover:scale-95">
        <img
          className="rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo" />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4 className="font-medium py-1">{avgRating}⭐ ▪️ {sla.slaString}</h4>
        <h5 className="py-1">{cuisines.join(", ")}</h5>
        <h5 className="font-medium">📍{areaName}</h5>
      </div>
    </Link>
  );
};

export default RestaurantCard;