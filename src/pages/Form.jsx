import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();


  const [form, setForm] = useState({
    type: "",
    quantity: "",
    snackQty: "",
    cashPrice: "",
    kpayPrice: "",
  });

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    data.push({
      ...form,
      cash: form.quantity * form.cashPrice || form.snackQty * form.cashPrice,
      kpay: form.quantity * form.kpayPrice || form.snackQty * form.kpayPrice,
      currentTime: formattedTime,
    });
    localStorage.setItem("orders", JSON.stringify(data));
    setForm({
      type: "",
      quantity: "",
      snackQty: "",
      cashPrice: "",
      kpayPrice: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f9f1e7] flex items-center justify-center">
      <form
        onSubmit={handleAdd}
        className="bg-[#cfa97d] p-8 rounded shadow-md w-full max-w-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-[#3e2c1c]">Add Order</h2>

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full p-2 rounded outline-none"
          required
        >
          <option value="">Select Type</option>
          <option value="Latte">Latte</option>
          <option value="Cappuccino">Cappuccino</option>
          <option value="Juice">Juice</option>
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          className="w-full p-2 rounded outline-none"
        />
        <input
          type="number"
          name="snackQty"
          placeholder="Snack quantity"
          value={form.snackQty}
          onChange={handleChange}
          className="w-full p-2 rounded outline-none"
        />

        <div className="flex gap-4">
          <select
            name="cashPrice"
            value={form.cashPrice}
            onChange={handleChange}
            className="w-full p-2 rounded outline-none"
          >
            <option value="">Cash Price</option>
            <option value="1000">1000</option>
            <option value="1500">1500</option>
            <option value="2000">2000</option>
          </select>

          <select
            name="kpayPrice"
            value={form.kpayPrice}
            onChange={handleChange}
            className="w-full p-2 rounded outline-none"
          >
            <option value="">KPay Price</option>
            <option value="1000">1000</option>
            <option value="1500">1500</option>
            <option value="2000">2000</option>
          </select>
        </div>

        <select
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded outline-none"
          required
        >
          <option value="" disabled>Who Submit?</option>
          <option value="p1">Player 1</option>
          <option value="p2">Player 2</option>
          <option value="p3">Player 3</option>
        </select>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-[#704214] text-white px-4 py-2 rounded"
          >
            Add to Table
          </button>
          <button
            type="button"
            onClick={() => navigate("/table")}
            className="bg-[#a47148] text-white px-4 py-2 rounded"
          >
            Go to Table
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
