import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NotificationBell = () => {
  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    const checkCart = () => {
      const cart = JSON.parse(localStorage.getItem("piu_cart")) || [];
      setHasItems(cart.length > 0);
    };

    checkCart();

    // Optional: trigger on localStorage change
    window.addEventListener("storage", checkCart);
    return () => window.removeEventListener("storage", checkCart);
  }, []);

  return (
    <Link to="/cart" className="relative">
      <Bell className="text-white w-6 h-6" />
      {hasItems && (
        <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full" />
      )}
    </Link>
  );
};

export default NotificationBell;
