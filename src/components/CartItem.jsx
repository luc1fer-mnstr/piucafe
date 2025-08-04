import { Trash2, Minus, Plus } from "lucide-react";

const CartItem = ({ item, index, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-20 h-20 rounded" />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-500">Price: {item.price} MMK</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => onDecrease(index)}><Minus size={18} /></button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(index)}><Plus size={18} /></button>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold">{item.price * item.quantity} MMK</span>
        <button onClick={() => onRemove(index)} className="text-red-600">
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
