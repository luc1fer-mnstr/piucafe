import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NotificationBell = () => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const checkCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setItemCount(total);
    };

    checkCart();

    // Update every 1s to simulate live update (simple solution)
    const interval = setInterval(checkCart, 1000);

    // Clean up
    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/cart" className="relative">
      <Bell className="text-blue-400 w-12 h-12" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default NotificationBell;
