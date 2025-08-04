import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import menuItems from "../data/MenuItems.js";
import { ShoppingCart } from "lucide-react";
import NotificationBell from "../components/NotificationBell";

const Menu = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (item) => {
    let updatedCart = [...cart];

    // Check if item already in cart
    const existingIndex = updatedCart.findIndex((i) => i.id === item.id);

    if (existingIndex !== -1) {
      // Increment quantity
      updatedCart[existingIndex].quantity += 1;
    } else {
      // Add new item with quantity 1
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success(`${item.name} added to cart`, {
      position: "top-right",
    });
  };

  return (
    <div className="bg-[#f0e5d8] min-h-screen py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#3e2c1c]">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-black">{item.name}</h3>
            <p className="text-lg font-bold text-[#a47148] mb-4">
              {item.price.toLocaleString()} MMK
            </p>
            <button
              onClick={() => handleAddToCart(item)}
              className="flex items-center bg-[#3e2c1c] text-white px-4 py-2 rounded hover:bg-[#5a3e2c] transition"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 right-8 flex items-center justify-end gap-4">
        <NotificationBell />
      </div>
    </div>
  );
};

export default Menu;
