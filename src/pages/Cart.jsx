import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item removed");
  };

  const updateQuantity = (index, delta) => {
    const updatedCart = [...cart];
    const item = updatedCart[index];
    item.quantity = Math.max(1, (item.quantity || 1) + delta);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = async () => {
    const { name, contact, date, time } = customer;

    if (!name || !contact || !date || !time || cart.length === 0) {
      toast.error("Please fill all fields and add at least one item.");
      return;
    }

    setIsSubmitting(true); // Disable button

    const orders = cart.map((item) => ({
      name,
      contact,
      date,
      time,
      item: item.name,
      price: item.price,
      qty: item.quantity || 1,
    }));

    try {
      await axios.post("https://sheetdb.io/api/v1/kt0no0cndi67g", {
        data: orders,
      });

      toast.success("Order confirmed!");
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error saving to sheet:", error);
      toast.error("Something went wrong. Try again.");
      setIsSubmitting(false); // Re-enable button on error
    }
  };

  return (
    <div className="bg-[#f0e5d8] min-h-screen py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#3e2c1c] mb-8">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-black">{item.name}</h3>
                  <p className="text-[#a47148] font-bold">
                    {(item.price * (item.quantity || 1)).toLocaleString()} MMK
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="px-2 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="px-2 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => removeItem(index)} className="text-red-500">
                <Trash2 />
              </button>
            </div>
          ))}

          {/* Customer Info Form */}
          <div className="bg-white p-6 rounded-lg shadow mt-10">
            <h3 className="text-xl font-semibold mb-4 text-black">Customer Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={customer.name}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={customer.contact}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
              />
              <input
                type="date"
                name="date"
                value={customer.date}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
              />
              <input
                type="time"
                name="time"
                value={customer.time}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
              />
            </div>
            <button
              onClick={handleConfirmOrder}
              disabled={isSubmitting}
              className={`px-6 py-2 rounded mt-4 text-white transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#3e2c1c] hover:bg-[#5a3e2c]"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Confirm Order"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
