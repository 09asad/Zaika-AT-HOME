import ItemList from "./ItemList";

const RestaurantCategory = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="mb-4 shadow-sm">
      {/* Category Header */}
      <div
        className="flex justify-between items-center bg-gray-100 px-4 py-4 cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="font-bold text-lg">{title}</h2>
        <span className="text-gray-600 text-sm"> 
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {/* Category Items */}
      {isOpen && (
        <div className="bg-white">
          <ItemList items={items} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
