import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();     // useDispatch = Hook, to send data (or tell Redux to change something)

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <ul className="p-3 space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-start border-b pb-3 last:border-b-0"
        >
          <div>
            <h3 className="font-semibold">{item.name} ▪️ ₹{item.price}</h3>
            <p className="text-gray-800 text-sm">{item.description}</p>
          </div>

          <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
          onClick={ () => handleAddItem(item) }>
            Add +
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
